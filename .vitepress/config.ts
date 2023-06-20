import { defineConfig } from 'vitepress';

export const PUBLIC_PATH = '/pengian-docs/BE';

export default defineConfig({
  srcDir: "src",
  title: "Pengian Docs",
  description: "个人技术文档-后端",
  base: PUBLIC_PATH,
  lang: "zh",
  outDir: "docs-be",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: PUBLIC_PATH + "favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "referrer",
        content: "no-referrer",
      },
    ],
  ],
  themeConfig: {
    logo: PUBLIC_PATH + "pengian.jpg", // 左上角标题的logo
    nav: [
      { text: "首页", link: "/" },
      { text: 'Java', link: '/java/' },
    ],
  },
  markdown: {
    toc: { level: [2, 3] },
  },
});
