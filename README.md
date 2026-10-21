# Janae Coraggio Art Portfolio

Portfolio website for self-taught illustrator and children's book author **Janae Coraggio** ([janaecoraggio.art](https://janaecoraggio.art)).

---

## Tech Stack

- **Site Generator:** [Jekyll](https://jekyllrb.com/) with Liquid templates
- **Styling:** Custom Sass (`@use` modular system) & Bootstrap
- **CMS:** [Sanity.io](https://www.sanity.io/) (Headless CMS for books, galleries, murals, workshops, and about content)
- **Deployment & Hosting:** [Netlify](https://www.netlify.com/) (automated continuous deployment on push to `main`)
- **Code Formatting:** Prettier with Liquid plugin

---

## Project Structure

```text
├── _data/
│   ├── sanity/          # JSON data fetched from Sanity at build time
│   ├── gallery.yml      # Local fallback gallery items
│   └── socials.yml      # Social profile links
├── _includes/           # Reusable Liquid components (headers, carousels, footers)
├── _layouts/            # Page templates (about, landing, page, default)
├── _pages/              # Content pages (about, books, murals, workshops, contact)
├── _sass/               # Modular Sass source files
├── assets/              # Static fonts, images, CSS, and JS
├── scripts/             # Data fetch & seed utilities for Sanity
│   ├── fetch-sanity.mjs # Fetches published documents into _data/sanity/
│   └── seed-sanity.mjs  # One-time migration/seeding script
├── studio/              # Embedded Sanity Studio (React / Sanity v3)
│   ├── schemas/         # Content schemas (books, homeGallery, muralsPage, etc.)
│   └── sanity.config.ts # Studio configuration
└── netlify.toml         # Netlify build configuration
```

---

## Content Management (Sanity Studio)

All portfolio content (books, gallery images, murals, workshops, and about bio) can be managed via Sanity Studio:

1. **Run Studio locally:**

   ```bash
   cd studio
   npm install
   npm run dev
   ```

   Open `http://localhost:3333` in your browser.

2. **Publishing Changes:**
   When you edit and publish documents in Sanity Studio, trigger a site build to pull the latest changes into the live site (via the in-Studio "Deploy" button or Netlify dashboard).

---

## Local Development

### Prerequisites

- **Node.js** (v18+)
- **Ruby** (v3.2+) & **Bundler**

### Setup & Running the Site

1. **Install dependencies:**

   ```bash
   npm install
   bundle install
   ```

2. **Configure Sanity credentials in `.env`:**

   ```env
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=production
   SANITY_TOKEN=your_token
   ```

3. **Fetch content from Sanity:**

   ```bash
   npm run fetch:sanity
   ```

4. **Serve Jekyll locally:**
   ```bash
   bundle exec jekyll serve
   ```
   Open `http://localhost:4000` to preview.

---

## Scripts & Linting

- `npm run fetch:sanity`: Pulls updated content from Sanity into `_data/sanity/`
- `npm run lint`: Checks formatting across Liquid, Sass, JS, and Markdown files
- `npm run format`: Formats code using Prettier

---

## Deployment

Deployments are fully automated via **Netlify**:

1. Any push to `main` triggers a Netlify build.
2. Netlify installs dependencies, fetches the latest Sanity data (`npm run fetch:sanity`), and builds the Jekyll site.
3. Build artifacts are published directly to production at [janaecoraggio.art](https://janaecoraggio.art).
