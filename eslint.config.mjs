import eslint from '@eslint/js';
import mm from '@maxmilton/eslint-config';
import unicorn from 'eslint-plugin-unicorn';
import ts from 'typescript-eslint';

const ERROR = 2;

export default ts.config(
  eslint.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  unicorn.configs['flat/recommended'],
  mm.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: ERROR,
    },
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
        projectService: {
          allowDefaultProject: ['*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ['**/*.bak'],
  },
);
