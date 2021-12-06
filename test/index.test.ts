import stylelint from 'stylelint';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
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
  assert.is(result.errored, false);
});

test('reports error on "prettier-ignore" comment without shared config', async () => {
  const result = await stylelint.lint({
    code: 'body {\n  margin: 0;\n  /* prettier-ignore */\n  color: red;\n}\n',
    config: baseConfig,
  });
  assert.is(result.errored, true);
  assert.is(result.results.length, 1);
  assert.is(result.results[0].warnings.length, 1);
  assert.is(result.results[0].warnings[0].rule, 'comment-empty-line-before');
});

test('does not error on "prettier-ignore" comment', async () => {
  const result = await stylelint.lint({
    code: 'body {\n  margin: 0;\n  /* prettier-ignore */\n  color: red;\n}\n',
    config,
  });
  assert.is(result.errored, false);
});

test('reports error on "#apply" property without shared config', async () => {
  const result = await stylelint.lint({
    code: 'body {\n  #apply: .bold;\n}\n',
    config: baseConfig,
  });
  assert.is(result.errored, true);
  assert.is(result.results.length, 1);
  assert.is(result.results[0].warnings.length, 1);
  assert.is(result.results[0].warnings[0].rule, 'property-no-unknown');
});

test('does not error on "#apply" property', async () => {
  const result = await stylelint.lint({
    code: 'body {\n  #apply: .bold;\n}\n',
    config,
  });
  assert.is(result.errored, false);
});

test('crashes on XCSS expression without shared config', async () => {
  const result = await stylelint.lint({
    files: ['test/fixtures/simple.xcss'], // must use file so shared config uses matching override
    config: baseConfig,
  });
  assert.is(result.errored, true);
  assert.is(result.results.length, 1);
  assert.is(result.results[0].warnings.length, 1);
  assert.is(result.results[0].warnings[0].rule, 'CssSyntaxError');
});

test('does not crash on XCSS expression', async () => {
  const result = await stylelint.lint({
    files: ['test/fixtures/simple.xcss'],
    config,
  });
  assert.is(result.errored, false);
});

test.run();
