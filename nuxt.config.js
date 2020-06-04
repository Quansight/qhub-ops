const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}


export default {
  ...routerBase,
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
  plugins: [
  ],
  generate: {},
};
