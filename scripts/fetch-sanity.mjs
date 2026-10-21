/**
 * scripts/fetch-sanity.mjs
 *
 * Run before `jekyll build` to pull content from Sanity and write it to
 * _data/sanity/ as static JSON files that Jekyll can read at build time.
 *
 * Required env vars (set in Netlify → Site settings → Environment variables):
 *   SANITY_PROJECT_ID  — from sanity.io/manage
 *   SANITY_TOKEN       — a read-only API token from sanity.io/manage → API → Tokens
 *   SANITY_DATASET     — defaults to "production"
 */

import { createClient } from "@sanity/client";
import { toHTML } from "@portabletext/to-html";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";

// Load local .env if present
if (existsSync(".env")) {
  const envContent = readFileSync(".env", "utf8");
  for (const line of envContent.split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (!process.env[key]) process.env[key] = value;
    }
  }
}

// Graceful no-op when credentials aren't present
if (!process.env.SANITY_PROJECT_ID) {
  console.log("⚠️  SANITY_PROJECT_ID not set — skipping Sanity fetch.");
  console.log("   Using existing _data/sanity/ files (or defaults if none exist).");
  process.exit(0);
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || "production",
  token: process.env.SANITY_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false, // always fresh content at build time
});

/** Convert Portable Text blocks to an HTML string */
function portableToHtml(blocks) {
  if (!blocks || !blocks.length) return null;
  return toHTML(blocks, {
    components: {
      marks: {
        link: ({ children, value }) => {
          const target = value?.blank ? ' target="_blank" rel="noopener noreferrer"' : "";
          return `<a href="${value?.href}"${target}>${children}</a>`;
        },
      },
    },
  });
}

/** Convert YouTube watch / short link to standard embed URL */
function toYoutubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

mkdirSync("_data/sanity", { recursive: true });

// ── Homepage Gallery ─────────────────────────────────────────────────────────
const gallery = await client.fetch(
  `*[_type == "homeGallery"][0]{
    images[]{
      caption,
      alt,
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height,
      "aspectRatio": asset->metadata.dimensions.aspectRatio
    }
  }`
);

const galleryOut = (gallery?.images || []).map((img) => ({
  caption: img.caption || "Artwork",
  alt: img.alt || img.caption || "Artwork",
  url: img.url,
  width: img.width,
  height: img.height,
  aspectRatio: img.aspectRatio,
}));

writeFileSync("_data/sanity/gallery.json", JSON.stringify(galleryOut, null, 2));
console.log(`✓ gallery: ${galleryOut.length} image(s)`);

// ── Books ────────────────────────────────────────────────────────────────────
const books = await client.fetch(
  `*[_type == "book"] | order(title asc) {
    "slug": slug.current,
    title,
    category,
    description,
    images[]{
      caption,
      alt,
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }`
);

const booksOut = books.map((book) => ({
  slug: book.slug,
  title: book.title,
  category: book.category,
  description_html: portableToHtml(book.description),
  images: (book.images || []).map((img) => ({
    caption: img.caption || book.title,
    alt: img.alt || img.caption || book.title,
    url: img.url,
    width: img.width,
    height: img.height,
  })),
}));

writeFileSync("_data/sanity/books.json", JSON.stringify(booksOut, null, 2));
console.log(`✓ books: ${booksOut.length} document(s)`);

// ── About page ───────────────────────────────────────────────────────────────
const about = await client.fetch(`*[_type == "aboutPage"][0]{ bio, features }`);

const aboutOut = about
  ? {
      bio_html: portableToHtml(about.bio),
      features_html: portableToHtml(about.features),
    }
  : {};

writeFileSync("_data/sanity/about.json", JSON.stringify(aboutOut, null, 2));
console.log(`✓ about: ${about ? "found" : "not yet in Sanity — using fallback"}`);

// ── Workshops page ───────────────────────────────────────────────────────────
const workshops = await client.fetch(
  `*[_type == "workshopsPage"][0]{
    headline,
    body,
    images[]{
      caption,
      alt,
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }`
);

const workshopsOut = workshops
  ? {
      headline: workshops.headline ?? null,
      body_html: portableToHtml(workshops.body),
      images: (workshops.images || []).map((img) => ({
        caption: img.caption || "Workshop",
        alt: img.alt || img.caption || "Workshop",
        url: img.url,
        width: img.width,
        height: img.height,
      })),
    }
  : {};

writeFileSync("_data/sanity/workshops.json", JSON.stringify(workshopsOut, null, 2));
console.log(`✓ workshops: ${workshops ? `${workshopsOut.images.length} image(s)` : "not yet in Sanity — using fallback"}`);

// ── Murals page ──────────────────────────────────────────────────────────────
const murals = await client.fetch(
  `*[_type == "muralsPage"][0]{
    headline,
    body,
    videos[]{
      title,
      url
    }
  }`
);

const muralsOut = murals
  ? {
      headline: murals.headline ?? null,
      body_html: portableToHtml(murals.body),
      videos: (murals.videos || []).map((v) => ({
        title: v.title || "Mural Video",
        url: v.url,
        embed_url: toYoutubeEmbedUrl(v.url),
      })),
    }
  : {};

writeFileSync("_data/sanity/murals.json", JSON.stringify(muralsOut, null, 2));
console.log(`✓ murals: ${murals ? `${muralsOut.videos.length} video(s)` : "not yet in Sanity — using fallback"}`);

console.log("\n✅ Sanity fetch complete. Files written to _data/sanity/");
