import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "1hf4t160",
  dataset: "production",
  title: "HCA Website",
  apiVersion: "2023-05-24",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
