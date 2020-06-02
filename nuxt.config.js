export default {
  buildModules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: [
      "markdown-it-div",
      "markdown-it-attrs",
    ],
  },
  vuetify: {},
};
