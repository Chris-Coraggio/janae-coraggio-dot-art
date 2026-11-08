import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "headerLogoAnimated",
      title: "Homepage Animated Logo (GIF)",
      type: "image",
      description: "Animated logo displayed exclusively in the header of the homepage.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Accessibility text (default: 'Janae Dueck Coraggio').",
        }),
      ],
    }),
    defineField({
      name: "headerLogo",
      title: "Header Logo (Static)",
      type: "image",
      description: "Static logo displayed in the header on all pages except the homepage.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Accessibility text (default: 'Janae Dueck Coraggio').",
        }),
      ],
    }),
    defineField({
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
      description: "Artwork logo displayed in the footer of every page.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Accessibility text (default: 'Janae Dueck Coraggio').",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
