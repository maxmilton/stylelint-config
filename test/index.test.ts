import { describe, expect, test } from 'bun:test';
import stylelint from 'stylelint';
import sharedConfig from '../src/index.js';

const baseConfig = {
  extends: ['stylelint-config-standard'],
};
const config = {
  ...baseConfig,
  ...sharedConfig,
};

test('lints without crashing and no error', async () => {
  expect.assertions(1);
  const result = await stylelint.lint({
    code: 'body { color: red; }\n',
    config,
  });
  expect(result.errored).toBeFalse();
});

test('reports no warnings', async () => {
  expect.assertions(2);
  const result = await stylelint.lint({
    code: 'body { color: red; }\n',
    config,
  });
  expect(result.results).toBeArrayOfSize(1);
  expect(result.results[0].warnings).toStrictEqual([]);
});

test('reports error on "prettier-ignore" comment without shared config', async () => {
  expect.assertions(4);
  const result = await stylelint.lint({
    code: 'body {\n  margin: 0;\n  /* prettier-ignore */\n  color: red;\n}\n',
    config: baseConfig,
  });
  expect(result.errored).toBeTrue();
  expect(result.results).toBeArrayOfSize(1);
  expect(result.results[0].warnings).toBeArrayOfSize(1);
  expect(result.results[0].warnings[0].rule).toBe('comment-empty-line-before');
});

test('does not error on "prettier-ignore" comment', async () => {
  expect.assertions(1);
  const result = await stylelint.lint({
    code: 'body {\n  margin: 0;\n  /* prettier-ignore */\n  color: red;\n}\n',
    config,
  });
  expect(result.errored).toBeFalse();
});

describe('sort order', () => {
  // TODO:!
});
