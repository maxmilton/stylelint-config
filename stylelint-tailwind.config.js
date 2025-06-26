/** @type {import('stylelint').Config} */
export const config = {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          /** tailwindcss v4 */
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'plugin',
          /** tailwindcss v3 */
          'tailwind',
          'apply',
          'layer',
          'config',
          /** tailwindcss v1, v2 */
          // 'variants',
          // 'responsive',
          // 'screen',
        ],
      },
    ],
    'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'import-notation': null,
  },
};

export default config;
