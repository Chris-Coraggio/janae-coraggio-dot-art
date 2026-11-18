import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  // Singleton — only one document of this type should ever exist
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "body",
      title: "Body Copy",
      type: "array",
      description: "The intro text displayed above the contact form.",
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
  ],
  preview: {
    prepare() {
      return { title: "Contact Page" };
    },
  },
});
