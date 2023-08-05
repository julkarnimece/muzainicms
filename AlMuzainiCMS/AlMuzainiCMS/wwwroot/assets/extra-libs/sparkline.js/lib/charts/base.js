'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

var _dom = require('../utils/dom');

var _id = require('../utils/id');

var _themes = require('../themes');

var Base = exports.Base = function () {
  function Base(cfg) {
    babelHelpers.classCallCheck(this, Base);

    this.cfg = cfg;

    this.prepare();
  }

  babelHelpers.createClass(Base, [{
    key: 'value',
    value: function value(values) {
      this.values = values;
      return this;
    }
  }, {
    key: 'prepare',
    value: function prepare() {
      var _cfg = this.cfg,
          width = _cfg.width,
          height = _cfg.height;

      this.svg = (0, _dom.createSvgElement)('svg', {
        id: (0, _id.id)(),
        class: 'spark-line',
        width: width,
        height: height
      });
    }
  }, {
    key: 'theme',
    value: function theme() {
      return (0, _themes.getTheme)(this.cfg.theme);
    }
  }, {
    key: 'paint',
    value: function paint() {
      throw new Error('Function paint should be implemented.');
    }
  }, {
    key: 'render',
    value: function render(el) {
      var ele = typeof el === 'string' ? document.querySelector(el) : el;
      ele.innerHTML = '';
      ele.appendChild(this.paint());
    }
  }]);
  return Base;
}();