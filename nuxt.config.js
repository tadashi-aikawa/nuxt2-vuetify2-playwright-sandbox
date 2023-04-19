export default {
  ssr: false,
  target: "static",
  head: {
    titleTemplate: "%s - nuxt2-vuetify2-playwright-sandbox",
    title: "nuxt2-vuetify2-playwright-sandbox",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],
  axios: {
    baseURL: "/",
  },
  plugins: [{ src: "~/plugins/prism.ts" }],
};
