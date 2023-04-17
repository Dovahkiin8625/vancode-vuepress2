import { defineUserConfig } from 'vuepress';
// import {path} from '@vuepress/utils'

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
  // plugins: [autoCatalogPlugin()],
});
