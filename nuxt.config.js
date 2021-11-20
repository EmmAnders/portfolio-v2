export default {
  target: "static",
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "EMMA",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/jsv2ezb.css" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/_main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/global", mode: "client" }],

  publicRuntimeConfig: {
    axios: {},
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/fragments" },
    { path: "~/components/layout" },
    { path: "~/components/common" },
    { path: "~/components/sections" },
    { path: "~/components/navigation" },
    { path: "~/components/svg" },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    /* ["@nuxtjs/axios"] */
  ],

  build: {
    transpile: ["gsap"],
  },

  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: [
      "./assets/vars/_colors.scss",
      "./assets/vars/_layout.scss",
      "./assets/abstracts/_mixins.scss", // use underscore "_" & also file extension ".scss"
      "./assets/_main.scss", // use underscore "_" & also file extension ".scss"
    ],
  },
};
