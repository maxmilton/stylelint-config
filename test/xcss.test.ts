import { describe, expect, test } from 'bun:test';
import stylelint from 'stylelint';
import config from '../src/xcss.js';

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

test('reports error on "#apply" property without shared config', async () => {
  expect.assertions(5);
  const result = await stylelint.lint({
    code: 'body {\n  #apply: .bold;\n}\n',
    config: { extends: ['stylelint-config-standard'] },
  });
  expect(result.errored).toBeTrue();
  expect(result.results).toBeArrayOfSize(1);
  expect(result.results[0].warnings).toBeArrayOfSize(2);
  expect(result.results[0].warnings[0].rule).toBe('declaration-property-value-no-unknown');
  expect(result.results[0].warnings[1].rule).toBe('property-no-unknown');
});

test('does not error on "#apply" property', async () => {
  expect.assertions(1);
  const result = await stylelint.lint({
    code: 'body {\n  #apply: .bold;\n}\n',
    config,
  });
  expect(result.errored).toBeFalse();
});

describe('fixture: basic', () => {
  test('has syntax error on XCSS expression without shared config', async () => {
    expect.assertions(4);
    const result = await stylelint.lint({
      files: ['test/fixtures/basic.xcss'], // files must be used for overrides to work
      config: { extends: ['stylelint-config-standard'] },
    });
    expect(result.errored).toBeTrue();
    expect(result.results).toBeArrayOfSize(1);
    expect(result.results[0].warnings).toBeArrayOfSize(1);
    expect(result.results[0].warnings[0].rule).toBe('CssSyntaxError');
  });

  test('does not have syntax error on XCSS expression', async () => {
    expect.assertions(1);
    const result = await stylelint.lint({
      files: ['test/fixtures/basic.xcss'],
      config,
    });
    expect(result.errored).toBeFalse();
  });
});
