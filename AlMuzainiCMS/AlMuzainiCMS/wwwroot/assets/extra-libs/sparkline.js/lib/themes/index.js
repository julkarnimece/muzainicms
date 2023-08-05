'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTheme = exports.getTheme = undefined;

var _light = require('./light');

var _light2 = babelHelpers.interopRequireDefault(_light);

var _dark = require('./dark');

var _dark2 = babelHelpers.interopRequireDefault(_dark);

var themes = {
  light: _light2.default,
  dark: _dark2.default
};

var getTheme = exports.getTheme = function getTheme(name) {
  return themes[name] || _light2.default;
};

var registerTheme = exports.registerTheme = function registerTheme(name, theme) {
  themes[name] = theme;
};