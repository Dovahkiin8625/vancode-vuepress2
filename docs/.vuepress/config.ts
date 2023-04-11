import { defineUserConfig } from 'vuepress'
// import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
// import { VdoingThemeConfig } from "../../vancode/types";
// import dayjs from "dayjs";
import baiduCode from "./config/baiduCode"; // 百度统计hm码
import htmlModules from "./config/htmlModules"; // 自定义插入的html块

// latex支持

// md.use(mathjax3);

export default defineUserConfig({
  // theme: 'vdoing', // 使用npm包主题
  // theme: resolve(__dirname, "../../vancode"), // 使用本地主题

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Vancode",
      description: "Simplicity does not precede complexity, but follows it",
    },
  },

});
