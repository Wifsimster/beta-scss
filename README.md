# Beta-SCSS

Minimalist utility CSS kit for developer, built on SCSS !

Inspired by the awesome [tailwindcss](https://github.com/tailwindcss/tailwindcss)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Wifsimster/beta/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/beta-scss.svg)](https://www.npmjs.com/package/beta-scss)
[![Install size](https://packagephobia.now.sh/badge?p=beta-scss)](https://packagephobia.now.sh/result?p=beta-scss)

## Install

```
$ npm install beta-scss
```

## Usage

You can basically use it as an import :

```js
import `beta-scss`
```
Or, you can use the `global.scss`, which contains all variables :

```scss
@import "~beta-scss/packages/global"

// Define a color from the beta-scss palette
.blue {
 color: map-get($colors, "blue")
}
```

# [See documentation](https://wifsimster.github.io/beta-scss-documentation)
