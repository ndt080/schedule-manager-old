module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/styles/_vars.scss";
            @import "@/assets/styles/_fonts.scss";
            @import "@/assets/styles/main.scss";
            `,
      },
    },
  },
};
