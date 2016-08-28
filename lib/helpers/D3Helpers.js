'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yScale = exports.xScale = exports.yMax = exports.xMax = undefined;

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Returns the largest X coordinate from the data set
 */
var xMax = function xMax(data) {
  return _d2.default.max(data, function (d) {
    return d[0];
  });
};

/*
 * Returns the higest Y coordinate from the data set
 */
var yMax = function yMax(data) {
  return _d2.default.max(data, function (d) {
    return d[1];
  });
};

/*
 * Returns a function that "scales" X coordinates from the data to fit the chart
 */
var xScale = function xScale(padding, width, data) {
  return _d2.default.scale.linear().domain([0, xMax(data)]).range([padding, width - padding * 2]);
};

/*
 * Returns a function that "scales" Y coordinates from the data to fit the chart
 */
var yScale = function yScale(padding, height, data) {
  return _d2.default.scale.linear().domain([0, yMax(data)]).range([height - padding, padding]);
};

exports.xMax = xMax;
exports.yMax = yMax;
exports.xScale = xScale;
exports.yScale = yScale;