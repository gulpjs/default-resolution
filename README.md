<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# default-resolution

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Get the default resolution time based on the current node version, optionally overridable.

Originally implemented by [@dinoboff][dinoboff] in [gulpjs/undertaker#17][original].

Split out for standalone use.

## Usage

```js
var defaultResolution = require('default-resolution');

defaultResolution();
//-> 1000 (1 second) in node 0.10
//-> 1 (millisecond) in node 0.11+

// use a different value
defaultResolution(12);
//-> 12 always
```

## API

### `defaultResolution([resolution])`

Returns the default resolution, based on the node platform. See [Default resolution table][default-table] below for resolutions.

Optionally takes a resolution number to force override any platform resolutions.

### Default resolutions

| node version | resolution |
| ------------ | ---------- |
| 0.10         | 1s         |
| 0.11+        | 1ms        |

More information at https://github.com/gulpjs/undertaker/pull/17#issuecomment-82374512

# License

MIT

<!-- prettier-ignore-start -->
[downloads-image]: https://img.shields.io/npm/dm/default-resolution.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/default-resolution
[npm-image]: https://img.shields.io/npm/v/default-resolution.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/default-resolution/actions?query=workflow:dev
[ci-image]: https://img.shields.io/github/workflow/status/gulpjs/default-resolution/dev?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/default-resolution
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/default-resolution/master.svg?style=flat-square
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
[dinoboff]: https://github.com/dinoboff
[original]: https://github.com/gulpjs/undertaker/pull/17
[default-table]: #default-resolutions
<!-- prettier-ignore-end -->
