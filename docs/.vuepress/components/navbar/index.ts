import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  "/",
  {
    text: "前端",
    icon: "code",
    prefix: "/front-end/",
    // link: "/font-end/",
    children: [
      { text: "前端",icon: "laptop-code",link: ""},
      { text: "JavaScript", link: "javascript" },
      { text: "ECMAScript 6", link: "es6" },
      { text: "TypeScript", link: "typescript" },
      { text: "Vue.js", link: "vue" },
      { text: "React", link: "react" },
      { text: "前端素材", link: "前端素材" },
    ]
  },
  {
    text: "后端",
    icon: "server",
    prefix: "/back-end/",
    children:[
      { text: "后端",icon: "server",link: ""},
      { text: "Java", link: "java" },
      { text: "Python", link: "python" },
      { text: "Golang", link: "golang" },
      { text: "Spring", link: "spring" },
      { text: "Flask", link: "flask" }
    ]
  },
  {
    text: "算法",
    icon: "chart-line",
    prefix: "/algorithm/",
    children:[
      { text: "算法",icon: "server",link: ""},

    ]
  },
  {
    text: "架构",
    icon: "network-wired",
    prefix: "/architecture/",
    children:[
      { text: "架构",icon: "network-wired",link: ""},

    ]
  },
  {
    text: "数据库",
    icon: "database",
    prefix: "/database/",
    children:[
      { text: "数据库",icon: "database",link: ""},

    ]
  },
  {
    text: "物联网",
    icon: "code-branch",
    prefix: "/iot/",
    children:[
      { text: "物联网",icon: "code-branch",link: ""},

    ]
  },
  {
    text: "计算机基础",
    icon: "laptop",
    prefix: "/computer-basics/",
    children:[
      { text: "计算机基础",icon: "laptop",link: ""},

    ]
  },
  {
    text: "其他",
    icon: "magic",
    prefix: "/others/",
    children:[
      { text: "其他",icon: "magic",link: ""},

    ]
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
