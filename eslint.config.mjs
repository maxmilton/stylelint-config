import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import unicorn from 'eslint-plugin-unicorn';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const OFF = 0;
const WARN = 1;
const ERROR = 2;

export default tseslint.config(
  eslint.configs.recommended,
  ...compat.extends('airbnb-base').map((config) => ({
    ...config,
    plugins: {}, // delete
  })),
  ...compat.extends('airbnb-typescript/base'),
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // @ts-expect-error - no types
  // eslint-disable-next-line
  unicorn.configs['flat/recommended'],
  {
    linterOptions: {
      reportUnusedDisableDirectives: WARN,
    },
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: fixupPluginRules(
        compat.plugins('eslint-plugin-import')[0].plugins?.import ?? {},
      ),
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': ERROR,
      'import/prefer-default-export': OFF,
      'no-restricted-syntax': OFF,
      'no-void': OFF,
      'unicorn/filename-case': OFF,
      'unicorn/import-style': WARN,
      'unicorn/no-abusive-eslint-disable': WARN,
      'unicorn/no-null': OFF,
      'unicorn/prefer-module': WARN,
      'unicorn/prefer-top-level-await': WARN,
      'unicorn/prevent-abbreviations': OFF,

      /* Covered by biome formatter */
      '@typescript-eslint/indent': OFF,
      'function-paren-newline': OFF,
      'implicit-arrow-linebreak': OFF,
      'max-len': OFF,
      'object-curly-newline': OFF,
      'operator-linebreak': OFF,
      'unicorn/no-nested-ternary': OFF,
    },
  },
  {
    files: [
      '*.config.mjs',
      '*.d.ts',
      '**/*.spec.ts',
      '**/*.test.ts',
      'test/**',
    ],
    rules: {
      'import/no-extraneous-dependencies': OFF,
    },
  },
  {
    ignores: ['**/*.bak'],
  },
);
