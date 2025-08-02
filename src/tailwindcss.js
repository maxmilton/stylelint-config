/** @type {import('stylelint').Config} */
export default {
  rules: {
    "at-rule-no-deprecated": [true, { ignoreAtRules: ["apply"] }],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          /** tailwindcss v4 */
          // https://tailwindcss.com/docs/functions-and-directives
          "theme",
          "source",
          "utility",
          "variant",
          "custom-variant",
          "plugin",
          "reference",
          /** tailwindcss v3 */
          // https://v3.tailwindcss.com/docs/functions-and-directives
          "tailwind",
          "apply",
          "layer",
          "config",
          /** tailwindcss v1, v2 */
          // 'variants',
          // 'responsive',
          "screen",
        ],
      },
    ],
    "declaration-property-value-no-unknown": [
      true,
      { ignoreProperties: { "/.+/": ["/theme(.+)/"] } },
    ],
    "function-no-unknown": [true, { ignoreFunctions: ["--alpha", "--spacing", "theme"] }],
    "import-notation": null,
  },
};
