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
    [
      "@nuxtjs/google-gtag",
      {
        id: "G-FVBTSJTL46",
        config: {
          send_page_view: false,
          debug_mode: process.env.NODE_ENV !== "production",
        },
        debug: process.env.NODE_ENV !== "production",
        disableAutoPageTrack: false,
      },
    ],
  ],
  axios: {
    baseURL: "/",
  },
  plugins: [{ src: "~/plugins/prism.ts" }],
};
