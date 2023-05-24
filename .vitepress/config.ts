import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: "src",
  title: "Pengian Docs",
  description: "个人技术文档-后端",
  base: "/pengian-docs/BE/",
  lang: "zh",
  outDir: "docs",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "./favicon.ico",
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
    logo: "./pengian.jpg", // 左上角标题的logo
    nav: [
      { text: "首页", link: "/" },
      { text: 'Java', link: '/java/' },
    ],
  },
  markdown: {
    toc: { includeLevel: [2, 3] },
  },
});
