/**
 * scripts/seed-sanity.mjs
 *
 * Flushes all existing website content and uploads local photos to Sanity:
 * 1. Homepage Gallery (36 masonry images with captions)
 * 2. Workshops Page (copy + 10 carousel photos)
 * 3. All 9 Books (copy + book chapter/artwork photos)
 * 4. About Page bio
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=your_editor_token node scripts/seed-sanity.mjs
 */

import { createClient } from "@sanity/client";
import { createReadStream, existsSync, readdirSync, readFileSync } from "fs";
import path from "path";

function parseGalleryYml(content) {
  const items = [];
  const blocks = content.split(/- slug:\s*/);
  for (const block of blocks) {
    if (!block.trim()) continue;
    const slugMatch = block.match(/^["']?([^"'\s\n\r]+)["']?/);
    const captionMatch = block.match(/caption:\s*["']?([^"'\n\r]+)["']?/);
    if (slugMatch) {
      items.push({
        slug: slugMatch[1],
        caption: captionMatch ? captionMatch[1].trim() : "Artwork",
      });
    }
  }
  return items;
}

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

const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_TOKEN;
const projectId = process.env.SANITY_PROJECT_ID || "jto96msg";
const dataset = process.env.SANITY_DATASET || "production";

if (!token) {
  console.error("\n❌ Missing Sanity Write Token!");
  console.error("Please generate an Editor token in Sanity:");
  console.error("  1. Go to https://www.sanity.io/manage -> Project jto96msg -> API -> Tokens");
  console.error('  2. Click "Add API token", choose "Editor" permission (create, read, update, delete)');
  console.error('  3. Run:\n     SANITY_WRITE_TOKEN="your_token_here" node scripts/seed-sanity.mjs\n');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

function toBlock(text, markDefs = []) {
  return {
    _type: "block",
    _key: Math.random().toString(36).substring(2, 10),
    style: "normal",
    markDefs,
    children: [
      {
        _type: "span",
        _key: Math.random().toString(36).substring(2, 10),
        text,
        marks: [],
      },
    ],
  };
}

function toBlockWithLink(preText, linkText, href, postText) {
  const linkKey = Math.random().toString(36).substring(2, 10);
  return {
    _type: "block",
    _key: Math.random().toString(36).substring(2, 10),
    style: "normal",
    markDefs: [
      {
        _key: linkKey,
        _type: "link",
        href,
        blank: true,
      },
    ],
    children: [
      {
        _type: "span",
        _key: Math.random().toString(36).substring(2, 10),
        text: preText,
        marks: [],
      },
      {
        _type: "span",
        _key: Math.random().toString(36).substring(2, 10),
        text: linkText,
        marks: [linkKey],
      },
      {
        _type: "span",
        _key: Math.random().toString(36).substring(2, 10),
        text: postText,
        marks: [],
      },
    ],
  };
}

async function uploadImage(filePath, caption = "") {
  if (!existsSync(filePath)) return null;
  const filename = path.basename(filePath);
  const stream = createReadStream(filePath);
  const asset = await client.assets.upload("image", stream, { filename });
  return {
    _type: "image",
    _key: Math.random().toString(36).substring(2, 10),
    caption,
    alt: caption || filename,
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

async function uploadFolderImages(dirPath, defaultCaption = "") {
  if (!existsSync(dirPath)) return [];
  const files = readdirSync(dirPath)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();

  const images = [];
  for (const f of files) {
    const fullPath = path.join(dirPath, f);
    process.stdout.write(`    uploading ${f}... `);
    const imgObj = await uploadImage(fullPath, defaultCaption);
    if (imgObj) {
      images.push(imgObj);
      console.log("✓");
    }
  }
  return images;
}

async function seed() {
  const galleryOnly = process.argv.includes("--gallery-only");
  console.log(`\n🌱 Seeding content & uploading photos to Sanity (${projectId} / ${dataset})...\n`);

  if (!galleryOnly) {
    // 1. About Page (Singleton)
    const aboutDoc = {
      _id: "aboutPage",
      _type: "aboutPage",
      bio: [
        toBlock(
          'I’m a children’s book illustrator, author, and board certified art therapist with experience in both clinical and community-based settings. I wrote "Coloring God’s Love for Me: 100 Devotions to Inspire Young Hearts" published by Tommy Nelson, a Christian Imprint to HarperCollins. I hold a masters degree in Marriage and Family Therapy with a specialization in art therapy from Dominican University of California.'
        ),
        toBlock(
          "Currently, I'm facilitating community-based art workshops and continue to write and illustrate picture books covering socio-emotional topics. I'm a student in UC San Diego's Children's Illustration certificate program. My master's thesis explores the therapeutic value of children's books and I strongly believe that picture books are more than just stories, but can shape our thoughts and behaviors whether reading them as a child or adult."
        ),
        toBlock(
          "I live with my husband and samoyed rescue dog in the Berkley area where I love to go on hikes, visit good coffee shops, and be involved with my local church community."
        ),
      ],
      features: [
        toBlock(
          "2026 presenter at the American Art Therapy Association (AATA) Annual Conference on “Bibliotherapy and Art Therapy: The Power of Picture Books Across All Ages”"
        ),
        toBlockWithLink(
          "Concept Artist for a ",
          "Food Safety Law project",
          "https://www.marlerblog.com/case-news/colonel-colon-and-his-league-of-fecal-fighters/",
          ""
        ),
      ],
    };
    await client.createOrReplace(aboutDoc);
    console.log("✓ Seeded About Page");

    // 2. Workshops Page (Singleton + Images)
    console.log("\n📸 Uploading Workshops photos...");
    const workshopImages = await uploadFolderImages("assets/img/workshops", "Workshop");
    const workshopsDoc = {
      _id: "workshopsPage",
      _type: "workshopsPage",
      headline: "Read a book + make art!",
      body: [
        toBlock(
          "Please reach out if you’d like me to facilitate an art workshop! As an art therapist, I believe the art process can help foster mental, emotional, and spiritual growth."
        ),
        toBlockWithLink(
          "*Disclaimer: These art workshops are not art therapy. If you’re looking for art therapy, please visit the ",
          "American Art Therapy Association Art Therapist Locator",
          "https://arttherapy.org/art-therapist-locator/",
          " to find a registered art therapist in your area.*"
        ),
      ],
      images: workshopImages,
    };
    await client.createOrReplace(workshopsDoc);
    console.log(`✓ Seeded Workshops Page with ${workshopImages.length} photo(s)`);

    // 3. Murals Page (Singleton + Videos)
    const muralsDoc = {
      _id: "muralsPage",
      _type: "muralsPage",
      headline: "Murals & Community Art",
      body: [
        toBlock(
          "Please reach out if you're interested in commissioning a custom indoor or outdoor mural, interactive community wall, or large-scale installation!"
        ),
      ],
      videos: [
        {
          _key: "video-1",
          title: "Mural Video 1",
          url: "https://www.youtube.com/watch?v=XTAIVbOXsEI",
        },
        {
          _key: "video-2",
          title: "Mural Video 2",
          url: "https://www.youtube.com/watch?v=0v-NW3MquYw",
        },
      ],
    };
    await client.createOrReplace(muralsDoc);
    console.log("✓ Seeded Murals Page with 2 video(s)");
  }

  // 3. Homepage Gallery (Singleton)
  const galleryDir = process.env.GALLERY_DIR || "assets/img/gallery";
  console.log(`\n📸 Uploading Homepage Gallery photos from ${galleryDir}...`);
  let galleryYml = [];
  if (existsSync("_data/gallery.yml")) {
    galleryYml = parseGalleryYml(readFileSync("_data/gallery.yml", "utf8"));
  }

  const galleryImages = [];
  for (const item of galleryYml) {
    const fullPath = path.join(galleryDir, item.slug);
    process.stdout.write(`    uploading ${galleryDir}/${item.slug}... `);
    const imgObj = await uploadImage(fullPath, item.caption || "Artwork");
    if (imgObj) {
      galleryImages.push(imgObj);
      console.log("✓");
    }
  }

  const homeGalleryDoc = {
    _id: "homeGallery",
    _type: "homeGallery",
    images: galleryImages,
  };
  await client.createOrReplace(homeGalleryDoc);
  console.log(`✓ Seeded Homepage Gallery with ${galleryImages.length} photo(s)`);

  // 4. Books (Copy + Respective Image Folders)
  if (!galleryOnly) {
    const booksConfig = [
      {
        _id: "book-the-happy-field",
        slug: "the-happy-field",
        title: "The Happy Field",
        category: "picture-book",
        folder: "the-happy-field",
        desc: "Written by Bethany Clemons and illustrated by Janae Coraggio (2020). Available on Amazon.",
      },
      {
        _id: "book-dear-zoo",
        slug: "dear-zoo",
        title: "Dear Zoo, I Think My Sister Belongs with You!",
        category: "picture-book",
        folder: "dear-zoo",
        desc: "Written by Bethany Clemons and illustrated by Janae Coraggio (2021). Available on Amazon.",
      },
      {
        _id: "book-fifi-the-birthday-grump",
        slug: "fifi-the-birthday-grump",
        title: "Fifi the Birthday Grump",
        category: "picture-book",
        folder: "fifi-the-birthday-grump",
        desc: "Written by Nicole Marie and illustrated by Janae Coraggio (2018). Available on Amazon and Barnes & Noble.",
      },
      {
        _id: "book-sitting-with-my-lions",
        slug: "sitting-with-my-lions",
        title: "Sitting with My Lions: Being Brave Like Daniel in the Lion's Den",
        category: "picture-book",
        folder: "sitting-with-my-lions",
        desc: "Written and illustrated by Janae Coraggio (2019). Available on Amazon.",
      },
      {
        _id: "book-to-my-falling-leaves",
        slug: "to-my-falling-leaves",
        title: "To My Falling Leaves: The Story of Autumn",
        category: "picture-book",
        folder: "to-my-falling-leaves",
        desc: "Written and illustrated by Janae Coraggio (2015). Available on Amazon.",
      },
      {
        _id: "book-the-space-between-us",
        slug: "the-space-between-us",
        title: "The Space Between Us",
        category: "middle-grade-ya",
        folder: "the-space-between-us",
        desc: "Written by Sally Chung, Rapinder Kaur, and Jane Kwon; illustrated by Janae Coraggio (2025). Available on Amazon.",
      },
      {
        _id: "book-walking-with-my-elephant",
        slug: "walking-with-my-elephant",
        title: "Walking with My Elephant",
        category: "middle-grade-ya",
        folder: "walking-with-my-elephant",
        desc: "Written by Nicole Marie and illustrated by Janae Coraggio (2021). Available on Amazon.",
      },
      {
        _id: "book-the-little-carousel",
        slug: "the-little-carousel",
        title: "The Little Carousel That Could Change the World",
        category: "middle-grade-ya",
        folder: "the-little-carousel",
        desc: "Illustrated by Janae Coraggio.",
      },
      {
        _id: "book-coloring-gods-love",
        slug: "coloring-gods-love",
        title: "Coloring God's Love for Me",
        category: "devotional",
        folder: "coloring-gods-love",
        multiDesc: [
          "Coloring God’s Love for Me: 100 Devotions to Inspire Young Hearts is published by Tommy Nelson, a Christian imprint of HarperCollins (2022).",
          "This devotional coloring book invites young readers into 100 days of scripture, reflection, and creative expression — pairing uplifting devotions with original illustrations designed to color and make their own.",
          "Available on Amazon, Barnes & Noble, Target, Walmart, and Christianbook.",
        ],
      },
    ];

    console.log("\n📸 Uploading Books photos...");
    for (const b of booksConfig) {
      const bookImgPath = path.join("assets/img/books", b.folder);
      console.log(`  Uploading artwork for "${b.title}"...`);
      const bookImages = await uploadFolderImages(bookImgPath, b.title);

      const descriptionBlocks = b.multiDesc ? b.multiDesc.map((p) => toBlock(p)) : [toBlock(b.desc)];

      const bookDoc = {
        _id: b._id,
        _type: "book",
        title: b.title,
        slug: { _type: "slug", current: b.slug },
        category: b.category,
        description: descriptionBlocks,
        images: bookImages,
      };

      await client.createOrReplace(bookDoc);
      console.log(`✓ Seeded "${b.title}" (${bookImages.length} images)`);
    }
  }

  console.log("\n🎉 All content and photo collections have been uploaded to Sanity!");
  console.log("Refresh your Sanity Studio at http://localhost:3333 to see and manage your galleries.");
}

seed().catch((err) => {
  console.error("\n❌ Seeding failed:", err);
  process.exit(1);
});
