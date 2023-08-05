'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pie = undefined;

var _base = require('./base');

var _dom = require('../utils/dom');

var calXY = function calXY(r, cx, cy, angle) {
  return {
    x: cx + r * Math.cos(angle * Math.PI * 2),
    y: cy + r * Math.sin(angle * Math.PI * 2)
  };
};

var Pie = exports.Pie = function (_Base) {
  babelHelpers.inherits(Pie, _Base);

  function Pie() {
    babelHelpers.classCallCheck(this, Pie);
    return babelHelpers.possibleConstructorReturn(this, (Pie.__proto__ || Object.getPrototypeOf(Pie)).apply(this, arguments));
  }

  babelHelpers.createClass(Pie, [{
    key: 'getArcs',
    value: function getArcs() {
      var sum = this.values.reduce(function (r, v) {
        return r + v;
      }, 0);

      return this.values.map(function (v) {
        return v / sum;
      });
    }
  }, {
    key: 'getFill',
    value: function getFill(idx) {
      var _theme = this.theme(),
          colors = _theme.colors;

      return colors[idx % colors.length];
    }
  }, {
    key: 'paint',
    value: function paint() {
      var _this2 = this;

      var _cfg = this.cfg,
          width = _cfg.width,
          height = _cfg.height;


      var r = Math.min(width, height) / 2;

      var cx = width / 2;
      var cy = height / 2;

      var angle = 0.0;
      var tx = cx + r;
      var ty = cy;

      this.getArcs().forEach(function (v, idx) {
        // 根据圆形，计算坐标
        var _calXY = calXY(r, cx, cy, angle += v),
            x = _calXY.x,
            y = _calXY.y;

        var d = 'M ' + tx + ' ' + ty + ' A ' + r + ' ' + r + ', 0, ' + (v >= 0.5 ? 1 : 0) + ', 1, ' + x + ' ' + y + ' L ' + cx + ' ' + cy + ' Z';

        _this2.svg.appendChild((0, _dom.createSvgElement)('path', {
          fill: _this2.getFill(idx),
          d: d,
          'data-value': v
        }));

        // 作为下一个的起点
        tx = x;
        ty = y;
      });

      return this.svg;
    }
  }]);
  return Pie;
}(_base.Base);