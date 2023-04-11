import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

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

  // shouldPrefetch: false,
});
