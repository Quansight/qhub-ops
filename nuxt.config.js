const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/qhub-ops/'
  }
} : {}

export default {
  ...routerBase,
  css: [
    'static/QS_Full_Logo.svg'
  ],
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
     { src: '~/plugins/typed', mode: 'client' }, 
     { src: '~/plugins/vuetify', mode: 'client' }
  ],
  generate: {},
};
