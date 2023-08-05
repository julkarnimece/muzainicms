'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _themes = require('./themes');

Object.defineProperty(exports, 'registerTheme', {
  enumerable: true,
  get: function get() {
    return _themes.registerTheme;
  }
});

var _charts = require('./charts');

Object.defineProperty(exports, 'Chart', {
  enumerable: true,
  get: function get() {
    return babelHelpers.interopRequireDefault(_charts).default;
  }
});