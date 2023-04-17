import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/front-end/JavaScript/": "structure",
  "/front-end/ES6/": "structure",
  "/front-end/TypeScript/": "structure",
  "/front-end/Vue/": "structure",
  "/front-end/React/": "structure",
  "/front-end/前端素材/": "structure",
  "/back-end/Java/": "structure",
  "/back-end/Python/": "structure",
  "/back-end/Golang/": "structure",
  "/back-end/Spring/": "structure",
  "/back-end/Flask/": "structure",
  "/": [
    "/",
    {
      text: "前端",
      icon: "window-maximize",
      prefix: "/front-end/",
      link: "/front-end",
      children: [
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
      icon: "window-maximize",
      prefix: "/back-end/",
      link: "/back-end",
      children: [
        { text: "Java", link: "java" },
        { text: "Python", link: "python" },
        { text: "Golang", link: "golang" },
        { text: "Spring", link: "spring" },
        { text: "Flask", link: "flask" },
      ]
    },
  ],
});
