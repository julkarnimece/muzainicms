'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bar = undefined;

var _base = require('./base');

var _dom = require('../utils/dom');

var Bar = exports.Bar = function (_Base) {
  babelHelpers.inherits(Bar, _Base);

  function Bar() {
    babelHelpers.classCallCheck(this, Bar);
    return babelHelpers.possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
  }

  babelHelpers.createClass(Bar, [{
    key: 'getRects',
    value: function getRects() {
      var _cfg = this.cfg,
          width = _cfg.width,
          height = _cfg.height,
          _cfg$padding = _cfg.padding,
          padding = _cfg$padding === undefined ? .1 : _cfg$padding;


      var min = Math.min.apply(Math, babelHelpers.toConsumableArray(this.values));
      var max = Math.max.apply(Math, babelHelpers.toConsumableArray(this.values));
      var diff = max - min;

      var len = this.values.length;

      var w = (width - (len + 1) * padding) / len;
      var projectionH = function projectionH(value) {
        return Math.abs(height / diff * value);
      };
      var projectionX = function projectionX(idx) {
        return padding * (idx + 1) + idx * w;
      };

      var maxH = projectionH(max);

      return this.values.map(function (v, idx) {
        var h = projectionH(v);
        return {
          x: projectionX(idx),
          y: v < 0 ? maxH : maxH - h,
          w: w,
          h: projectionH(v),
          v: v
        };
      });
    }
  }, {
    key: 'paint',
    value: function paint() {
      var _this2 = this;

      var _theme = this.theme(),
          fill = _theme.fill;

      this.getRects().forEach(function (rect) {
        var x = rect.x,
            y = rect.y,
            w = rect.w,
            h = rect.h,
            v = rect.v;

        _this2.svg.appendChild((0, _dom.createSvgElement)('rect', {
          'data-value': v,
          fill: fill,
          x: x,
          y: y,
          width: w,
          height: h
        }));
      });

      return this.svg;
    }
  }]);
  return Bar;
}(_base.Base);