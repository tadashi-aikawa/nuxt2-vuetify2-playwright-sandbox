const isProduction = process.env.NODE_ENV === "production";

const gtagConfig = {
  id: "G-FVBTSJTL46",
  config: {
    send_page_view: false,
  },
  debug: !isProduction,
  disableAutoPageTrack: false,
};
// debug_mode: false でもデバッグモードは有効になるため別の処理として追加している (undefinedでもいいかもだけど)
// https://developers.google.com/analytics/devguides/collection/ga4/debug?hl=ja&technology=websites
if (!isProduction) {
  gtagConfig.config.debug_mode = true;
}

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
    ["@nuxtjs/google-gtag", gtagConfig],
  ],
  axios: {
    baseURL: "/",
  },
  plugins: [{ src: "~/plugins/prism.ts" }],
};
