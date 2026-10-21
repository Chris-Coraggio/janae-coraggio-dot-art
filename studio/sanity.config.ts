import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { RocketIcon } from "@sanity/icons/Rocket";
import { schemas } from "./schemas";
import { DeployView } from "./components/DeployView";

export default defineConfig({
  name: "default",
  title: "Janae Coraggio",

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || "jto96msg",
  dataset: import.meta.env.SANITY_STUDIO_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Homepage Gallery").child(S.document().schemaType("homeGallery").documentId("homeGallery")),
            S.listItem().title("Books").child(S.documentTypeList("book").title("Books")),
            S.listItem().title("About Page").child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.listItem().title("Workshops Page").child(S.document().schemaType("workshopsPage").documentId("workshopsPage")),
            S.listItem().title("Murals Page").child(S.document().schemaType("muralsPage").documentId("muralsPage")),
            S.divider(),
            S.listItem().title("🚀 Deploy to Live Site").icon(RocketIcon).child(S.component(DeployView).title("Deploy to Live Site")),
          ]),
    }),
    visionTool(),
  ],

  tools: (prev) => [
    ...prev,
    {
      name: "deploy",
      title: "Deploy to Site",
      icon: RocketIcon,
      component: DeployView,
    },
  ],

  schema: {
    types: schemas,
  },
});
