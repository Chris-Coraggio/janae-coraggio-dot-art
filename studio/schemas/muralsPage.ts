import { defineField, defineType } from "sanity";

export const muralsPage = defineType({
  name: "muralsPage",
  title: "Murals Page",
  type: "document",
  // Singleton — only one document of this type should ever exist
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: 'Bold headline shown above the body copy (e.g. "Murals & Community Art")',
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      description: "The main body copy for the Murals page.",
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
      name: "videos",
      title: "YouTube Videos",
      type: "array",
      description: "YouTube videos displayed in the carousel on the Murals page. Drag and drop to reorder.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Video Title",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "YouTube URL",
              type: "url",
              description: "Paste full YouTube link (e.g. https://www.youtube.com/watch?v=...)",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "url",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Murals Page" };
    },
  },
});
