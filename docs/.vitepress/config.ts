import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Pengian Docs',
  description: "Pengian'docs for backend",
  base: '/pengian-docs',
  lang: 'zh',
  themeConfig: {
    nav: [{ text: 'Java', link: '/java/' }],
  },
});
