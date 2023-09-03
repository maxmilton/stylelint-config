import { expect, test } from 'bun:test';
import stylelint from 'stylelint';
import sharedConfig from '../stylelint.config';

const baseConfig = {
  extends: ['stylelint-config-standard'],
};
const config = {
  ...baseConfig,
  ...sharedConfig,
};

test('lints without crashing', async () => {
  const result = await stylelint.lint({
    code: 'body { color: red; }\n',
    config,
  });
  expect(result.errored).toBe(false);
});

test('reports error on "prettier-ignore" comment without shared config', async () => {
  const result = await stylelint.lint({
    code: 'body {\n  margin: 0;\n  /* prettier-ignore */\n  color: red;\n}\n',
    config: baseConfig,
  });
  expect(result.errored).toBe(true);
  expect(result.results.length).toBe(1);
  expect(result.results[0].warnings.length).toBe(1);
  expect(result.results[0].warnings[0].rule).toBe('comment-empty-line-before');
});

test('does not error on "prettier-ignore" comment', async () => {
  const result = await stylelint.lint({
    code: 'body {\n  margin: 0;\n  /* prettier-ignore */\n  color: red;\n}\n',
    config,
  });
  expect(result.errored).toBe(false);
});

test('reports error on "#apply" property without shared config', async () => {
  const result = await stylelint.lint({
    code: 'body {\n  #apply: .bold;\n}\n',
    config: baseConfig,
  });
  expect(result.errored).toBe(true);
  expect(result.results.length).toBe(1);
  expect(result.results[0].warnings.length).toBe(1);
  expect(result.results[0].warnings[0].rule).toBe('property-no-unknown');
});

test('does not error on "#apply" property', async () => {
  const result = await stylelint.lint({
    code: 'body {\n  #apply: .bold;\n}\n',
    config,
  });
  expect(result.errored).toBe(false);
});

test('crashes on XCSS expression without shared config', async () => {
  const result = await stylelint.lint({
    files: ['test/fixtures/basic.xcss'], // must use file so shared config uses matching override
    config: baseConfig,
  });
  expect(result.errored).toBe(true);
  expect(result.results.length).toBe(1);
  expect(result.results[0].warnings.length).toBe(1);
  expect(result.results[0].warnings[0].rule).toBe('CssSyntaxError');
});

test('does not crash on XCSS expression', async () => {
  const result = await stylelint.lint({
    files: ['test/fixtures/basic.xcss'],
    config,
  });
  expect(result.errored).toBe(false);
});
