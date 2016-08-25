'use strict';

var _Donut = require('./pie/Donut');

var _Donut2 = _interopRequireDefault(_Donut);

var _Pie = require('./pie/Pie');

var _Pie2 = _interopRequireDefault(_Pie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Different UI components.
 */
/**
 * tango-chart
 * https://github.com/jyotirmaybanerjee/tango-chart
 *
 * Copyright (c) 2016 Jyotirmay Banerjee
 * Licensed under the MIT license.
 */

module.exports = {
  Pie: _Pie2.default,
  Donut: _Donut2.default
};