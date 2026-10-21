import { defineField, defineType } from "sanity";

export const homeGallery = defineType({
  name: "homeGallery",
  title: "Homepage Gallery",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      description: "Photos displayed on the homepage masonry grid. Drag and drop to reorder.",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "caption",
              title: "Caption / Title",
              type: "string",
              description: "Displayed under the photo in the FsLightbox modal and on hover.",
            }),
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              description: "For accessibility and SEO.",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage Gallery" };
    },
  },
});
