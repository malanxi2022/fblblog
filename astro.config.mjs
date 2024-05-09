import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/config";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [mdx(), sitemap(), tailwind(), react(), markdoc()],
    markdown: {
    //     // 应用于 .md 和 .mdx 文件
        remarkPlugins: [[remarkToc, {heading: "目录"}]]
    },
});