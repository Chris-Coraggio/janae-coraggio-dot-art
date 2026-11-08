import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "Must match the slug used in the site URL. Auto-generated from title, but double-check against the site.",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Title Picture / Cover",
      type: "image",
      description:
        "The main title/cover image displayed on the Books catalog page (/books/). This picture will NOT be duplicated in the interior gallery on this book's detail page.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  { name: "blank", type: "boolean", title: "Open in new tab", initialValue: true },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Interior Illustrations & Artwork",
      type: "array",
      description:
        "Interior book spreads and illustrations displayed vertically on this book's page. (Note: Do NOT re-upload the title picture here; upload it in the 'Title Picture / Cover' field above).",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current", media: "coverImage" },
    prepare({ title, slug, media }) {
      return { title, subtitle: slug ? `/books/${slug}/` : "", media };
    },
  },
});
