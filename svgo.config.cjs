module.exports = {
  plugins: [
    {
      cleanupIds: false,
      name: "preset-default",
      params: {
        overrides: {
          inlineStyles: {
            onlyMatchedOnce: false,
          },
          removeViewBox: false,
          removeDoctype: false,
          // removeAttrs: { attrs: ["fill"] },
          cleanupIds: false,
        },
      },
    },
    // {
    //   name: "removeAttrs",
    //   params: {
    //     attrs: "(fill|stroke)",
    //   },
    // },
  ],
};
