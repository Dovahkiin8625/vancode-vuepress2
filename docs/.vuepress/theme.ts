import { hopeTheme } from "vuepress-theme-hope";
// import {zhNavbar} from "./navbar";
// import {zhSidebar} from "./sidebar";
import { Navbar } from './components/navbar/index.js';
import { Sidebar } from './components/sidebar/index.js';
export default hopeTheme({
    fullscreen: true,

    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },

    hostname: 'http://www.vancode.top',
    author: {
        name: 'Vance.Liu',
        url: 'http://www.vancode.top',
    },

    // iconAssets: "//at.alicdn.com/t/c/font_3831129_6mpn8dhchwt.css",

    iconAssets: 'fontawesome',
    iconPrefix: 'fas fa-',
    logo: 'imgs/logo.jpg',

    repo: 'Dovahkiin8625/vancode-vuepress2',

    docsDir: 'docs',


    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],

    copyright: false,

    // footer: '<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">备案号: 沪ICP备2022029946号-2</a >',
    displayFooter: true,

    locales: {
        "/": {
            navbar: Navbar,

            // sidebar
            sidebar: Sidebar,

            // footer: "默认页脚",

            displayFooter: true,

            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
    },
    // hotReload: true,
    plugins: {
        // git: true,
        autoCatalog: {
            frontmatter: (path) => {
                let resovl = path.split("/")
                
                return { title: resovl[resovl.length - 2] }
            }
        },
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            // container: true,
            // demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },
        copyCode: { fancy: false, },
    },
});