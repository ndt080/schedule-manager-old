module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/_vars.scss";
            @import "@/styles/_fonts.scss";
            @import "@/styles/main.scss";
            `,
      },
    },
  },
};
