/** @type {import("stylelint").Config} */
export default {
  rules: {},
  overrides: [
    {
      files: ["**/*.xcss"],
      customSyntax: "postcss-ekscss",
      rules: {
        "declaration-property-value-no-unknown": [true, { ignoreProperties: { "#apply": "/.+/" } }],
        "import-notation": null,
        "property-no-unknown": [true, { ignoreProperties: ["#apply"] }],
      },
    },
  ],
};
