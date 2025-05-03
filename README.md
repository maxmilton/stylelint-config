[![Build status](https://img.shields.io/github/actions/workflow/status/maxmilton/stylelint-config/ci.yml?branch=master)](https://github.com/maxmilton/stylelint-config/actions)
[![Coverage status](https://img.shields.io/codeclimate/coverage/maxmilton/stylelint-config)](https://codeclimate.com/github/maxmilton/stylelint-config)
[![NPM version](https://img.shields.io/npm/v/@maxmilton/stylelint-config.svg)](https://www.npmjs.com/package/@maxmilton/stylelint-config)
[![Licence](https://img.shields.io/github/license/maxmilton/stylelint-config.svg)](https://github.com/maxmilton/stylelint-config/blob/master/LICENSE)

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

## Prior Art

This package is based on of the best ideas from:

- <https://github.com/ream88/stylelint-config-idiomatic-order>
- <https://github.com/hudochenkov/stylelint-config-hudochenkov>
- <https://github.com/constverum/stylelint-config-rational-order>
- <https://github.com/stormwarning/stylelint-config-recess-order>

## License

MIT license. See [LICENSE](https://github.com/maxmilton/stylelint-config/blob/master/LICENSE).

---

© 2025 [Max Milton](https://maxmilton.com)
