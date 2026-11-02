import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://seabotics.github.io",
  integrations: [
    mdx(),
    // Enable Vue for .vue component support.
    vue(),
    tailwind(),
  ],
});
