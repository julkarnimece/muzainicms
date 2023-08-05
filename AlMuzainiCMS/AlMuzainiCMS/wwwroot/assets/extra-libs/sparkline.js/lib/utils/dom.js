'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// export const isSvgSupported = () => 'createElementNS' in document && svgElement('svg', {})[0].createSVGRect;

/**
 * 创建一个 svg 节点
 * @param tag
 * @param attributes
 * @returns {HTMLElement | SVGAElement | SVGCircleElement | SVGClipPathElement | SVGComponentTransferFunctionElement | SVGDefsElement | *}
 */
var createSvgElement = exports.createSvgElement = function createSvgElement(tag, attributes) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);

  var keys = Object.keys(attributes || {});

  keys.forEach(function (key) {
    el.setAttribute(key, attributes[key]);
  });

  return el;
};