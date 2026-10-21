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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Picture Book", value: "picture-book" },
          { title: "Middle Grade & YA", value: "middle-grade-ya" },
          { title: "Devotional", value: "devotional" },
        ],
        layout: "radio",
      },
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
      title: "Book Photos / Artwork",
      type: "array",
      description: "Photos displayed in the carousel for this book. Drag and drop to reorder.",
      of: [
        {
          type: "image",
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
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", category: "category" },
    prepare({ title, category }) {
      const labels: Record<string, string> = {
        "picture-book": "Picture Book",
        "middle-grade-ya": "Middle Grade & YA",
        devotional: "Devotional",
      };
      return { title, subtitle: labels[category] ?? category };
    },
  },
});
