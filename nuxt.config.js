export default {
  modules: ["@nuxtjs/apollo"],

  buildModules: ["@nuxtjs/composition-api"],

  plugins: ["~/plugins/provide-apollo-client"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://localhost:4000"
      }
    }
  }
};
