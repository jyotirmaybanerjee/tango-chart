'use strict';

var _Donut = require('./pie/Donut');

var _Donut2 = _interopRequireDefault(_Donut);

var _Pie = require('./pie/Pie');

var _Pie2 = _interopRequireDefault(_Pie);

var _BarChart = require('./pie/BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

var _ScatteredPlot = require('./scattered/ScatteredPlot');

var _ScatteredPlot2 = _interopRequireDefault(_ScatteredPlot);

var _LineChart = require('./line/LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

var _TimeSeriesLineChart = require('./line/time/TimeSeriesLineChart');

var _TimeSeriesLineChart2 = _interopRequireDefault(_TimeSeriesLineChart);

var _LineChart3 = require('./line/full/LineChart');

var _LineChart4 = _interopRequireDefault(_LineChart3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Pie: _Pie2.default,
  Donut: _Donut2.default,
  BarChart: _BarChart2.default,
  ScatteredPlot: _ScatteredPlot2.default,
  LineChart: _LineChart2.default,
  TimeSeriesLineChart: _TimeSeriesLineChart2.default,
  LineChartWithAxis: _LineChart4.default
}; /**
    * tango-chart
    * https://github.com/jyotirmaybanerjee/tango-chart
    *
    * Copyright (c) 2016 Jyotirmay Banerjee
    * Licensed under the MIT license.
    */