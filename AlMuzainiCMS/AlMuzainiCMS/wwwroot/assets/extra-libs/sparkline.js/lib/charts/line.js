'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Line = undefined;

var _base = require('./base');

var _dom = require('../utils/dom');

var Line = exports.Line = function (_Base) {
  babelHelpers.inherits(Line, _Base);

  function Line() {
    babelHelpers.classCallCheck(this, Line);
    return babelHelpers.possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  babelHelpers.createClass(Line, [{
    key: 'getPoints',
    value: function getPoints() {
      var _cfg = this.cfg,
          width = _cfg.width,
          height = _cfg.height;

      var _theme = this.theme(),
          strokeWidth = _theme.strokeWidth;

      var min = Math.min.apply(Math, babelHelpers.toConsumableArray(this.values));
      var max = Math.max.apply(Math, babelHelpers.toConsumableArray(this.values));
      var diff = max - min;

      var len = this.values.length;

      var projectionX = function projectionX(idx) {
        return idx * (width / (len - 1));
      };

      var projectionY = function projectionY(v) {
        var y = height;

        if (diff) {
          y -= (v - min) / diff * height;
        }

        return y + strokeWidth / 2;
      };

      var zero = projectionY(Math.max(min, 0));

      var points = [];

      points.push([0, zero]);

      this.values.forEach(function (v, idx) {
        points.push([projectionX(idx), projectionY(v)]);
      });

      points.push([width, zero]);

      return points;
    }
  }, {
    key: 'paint',
    value: function paint() {
      var _theme2 = this.theme(),
          fill = _theme2.fill,
          stroke = _theme2.stroke,
          strokeWidth = _theme2.strokeWidth;

      var points = this.getPoints();

      if (fill) {
        this.svg.appendChild((0, _dom.createSvgElement)('polygon', {
          fill: fill,
          points: points.join(' ')
        }));
      }

      if (strokeWidth) {
        this.svg.appendChild((0, _dom.createSvgElement)('polyline', {
          fill: 'none',
          points: points.slice(1, -1).join(' '),
          stroke: stroke,
          'stroke-width': strokeWidth
        }));
      }

      return this.svg;
    }
  }]);
  return Line;
}(_base.Base);