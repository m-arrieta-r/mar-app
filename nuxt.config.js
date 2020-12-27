export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "About | Minor Arrieta Rojas",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      {
        hid: "image",
        name: "image",
        content: "https://www.marrietar.space/logo200w.png",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://www.marrietar.space/logo200w.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-v1.png" }],
  },

  loading: { color: "#fff" },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
