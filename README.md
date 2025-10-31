[![Build status](https://badgen.net/github/checks/maxmilton/stylelint-config?label=ci)](https://github.com/maxmilton/stylelint-config/actions)
[![Coverage status](https://badgen.net/codeclimate/coverage/maxmilton/stylelint-config)](https://codeclimate.com/github/maxmilton/stylelint-config)
[![NPM version](https://badgen.net/npm/v/@maxmilton/stylelint-config)](https://www.npmjs.com/package/@maxmilton/stylelint-config)
[![Licence](https://badgen.net/github/license/maxmilton/stylelint-config)](https://github.com/maxmilton/stylelint-config/blob/master/LICENSE)

<!-- TODO: Migrate to badgen.net once it supports qlty.sh -->
[![Coverage status](https://qlty.sh/badges/b2eae760-4e08-4c6e-9e58-8aa409b620fe/test_coverage.svg)](https://qlty.sh/gh/maxmilton/projects/stylelint-config)

# @maxmilton/stylelint-config

Stylelint configuration with support for [XCSS via ekscss](https://github.com/maxmilton/ekscss) and an opinionated property order.

Property order defined as:

> Note: Very new, seldom used, or poorly supported properties are not included in the groups.

1. Position
1. Box model & layout
1. Typography
1. Remaining properties sorted alphabetically

## Installation

1. Add dependencies to your project:

```sh
npm install --save-dev @maxmilton/stylelint-config stylelint-config-standard
```

2. Add to your stylelint configuration:

`.stylelintrc`:

```json
{
  "extends": ["stylelint-config-standard", "@maxmilton/stylelint-config"]
}
```

... or for custom syntax support:

```json
{
  "extends": [
    "stylelint-config-standard",
    "@maxmilton/stylelint-config",
    "@maxmilton/stylelint-config/tailwind",
    "@maxmilton/stylelint-config/xcss"
  ]
}
```

## Prior Art

This package is based on of the best ideas from:

- <https://github.com/ream88/stylelint-config-idiomatic-order>
- <https://github.com/hudochenkov/stylelint-config-hudochenkov>
- <https://github.com/constverum/stylelint-config-rational-order>
- <https://github.com/stormwarning/stylelint-config-recess-order>

## License

MIT license. See [LICENSE](./LICENSE).

---

© [Max Milton](https://maxmilton.com)
