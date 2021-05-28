export default {
  modules: ["@nuxtjs/apollo"],

  buildModules: ["@nuxtjs/composition-api/module"],

  build: {
    transpile: ["@vue/apollo-composable"]
  },

  plugins: ["~/plugins/provide-apollo-client"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://localhost:4000"
      }
    }
  }
};
