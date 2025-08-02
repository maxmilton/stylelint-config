import { describe, expect, test } from "bun:test";
import stylelint from "stylelint";
import config from "../src/tailwindcss.js";

test("lints without crashing and no error", async () => {
  expect.assertions(1);
  const result = await stylelint.lint({
    code: "body { color: red; }\n",
    config,
  });
  expect(result.errored).toBeFalse();
});

test("reports no warnings", async () => {
  expect.assertions(2);
  const result = await stylelint.lint({
    code: "body { color: red; }\n",
    config,
  });
  expect(result.results).toBeArrayOfSize(1);
  expect(result.results[0].warnings).toStrictEqual([]);
});

describe("fixture: tailwind-v4", () => {
  test("has warnings without shared config", async () => {
    expect.assertions(3);
    const result = await stylelint.lint({
      files: ["test/fixtures/tailwind-v4.css"],
      config: { extends: ["stylelint-config-standard"] },
    });
    expect(result.results).toBeArrayOfSize(1);
    expect(result.results[0].warnings).toBeArrayOfSize(26);
    expect(result.errored).toBeTrue();
  });

  test("does not have warnings with shared config", async () => {
    expect.assertions(3);
    const result = await stylelint.lint({
      files: ["test/fixtures/tailwind-v4.css"],
      config: {
        extends: [
          "stylelint-config-standard",
          "@maxmilton/stylelint-config",
          "@maxmilton/stylelint-config/tailwindcss",
        ],
      },
    });
    expect(result.results).toBeArrayOfSize(1);
    expect(result.results[0].warnings).toBeArrayOfSize(0);
    expect(result.errored).toBeFalse();
  });
});

describe("fixture: tailwind-v3", () => {
  test("has warnings without shared config", async () => {
    expect.assertions(3);
    const result = await stylelint.lint({
      files: ["test/fixtures/tailwind-v3.css"],
      config: { extends: ["stylelint-config-standard"] },
    });
    expect(result.results).toBeArrayOfSize(1);
    expect(result.results[0].warnings).toBeArrayOfSize(24);
    expect(result.errored).toBeTrue();
  });

  test("does not have warnings with shared config", async () => {
    expect.assertions(3);
    const result = await stylelint.lint({
      files: ["test/fixtures/tailwind-v3.css"],
      config: {
        extends: [
          "stylelint-config-standard",
          "@maxmilton/stylelint-config",
          "@maxmilton/stylelint-config/tailwindcss",
        ],
      },
    });
    expect(result.results).toBeArrayOfSize(1);
    expect(result.results[0].warnings).toBeArrayOfSize(0);
    expect(result.errored).toBeFalse();
  });
});

// TODO: Test that Tailwind's @-rules are not flagged as unknown
// - Test @theme, @source, @utility, @variant, @custom-variant, @plugin, @apply, @layer, @config

// TODO: Test that Tailwind's theme() function is not flagged as unknown
// - Test usage like: `color: theme('colors.blue.500')`

// TODO: Test that Tailwind's theme() function with nested values works
// - Test with different theme paths like spacing, fontSize, etc.

// TODO: Test that standard CSS at-rules are still flagged as errors when they're invalid
// - Test with invalid @-rules to ensure they're caught

// TODO: Test that non-Tailwind functions are still flagged as errors
// - Test with unknown functions to ensure they're caught

// TODO: Test that import-notation is disabled
// - Test that different import formats don't trigger the import-notation rule

// TODO: Test with actual Tailwind utility classes in CSS
// - Test with common utility classes to ensure they don't trigger errors
// - Test with variants like hover:, focus:, etc.

// TODO: Test with @apply directive
// - Test basic @apply usage
// - Test with multiple utilities
// - Test with !important

// TODO: Test with @layer directive
// - Test @layer base
// - Test @layer components
// - Test @layer utilities

// TODO: Test with @config directive
// - Test @config with path to config file
