import { defineField, defineType } from "sanity";

export const workshopsPage = defineType({
  name: "workshopsPage",
  title: "Workshops Page",
  type: "document",
  // Singleton — only one document of this type should ever exist
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: 'Bold headline shown above the body copy (e.g. "Read a book + make art!")',
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      description: "The main body copy. The disclaimer is kept here too.",
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
      title: "Workshop Photos",
      type: "array",
      description: "Photos displayed in the carousel on the workshops page. Drag and drop to reorder.",
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
    prepare() {
      return { title: "Workshops Page" };
    },
  },
});
