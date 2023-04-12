import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Vancode',
      description: 'Simplicity does not precede complexity, but follows it',
    },
  },

  theme,
  plugins: [
    // autoCatalogPlugin({
      //插件选项
    // }),
  ],
  // shouldPrefetch: false,
});
