"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var id = exports.id = function id() {
  return "el_" + Date.now() + "_" + parseInt(Math.random() * 10e8);
};