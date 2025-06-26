/** @type {import('stylelint').Config} */
export const config = {
  plugins: ['stylelint-order'],
  rules: {
    'declaration-property-value-no-unknown': [
      true,
      { ignoreProperties: { '#apply': '/.+/' } },
    ],
    'property-no-unknown': [true, { ignoreProperties: ['#apply'] }],
  },
  overrides: [
    {
      files: ['**/*.xcss'],
      customSyntax: 'postcss-ekscss',
    },
  ],
};

export default config;
