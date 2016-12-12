'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chart = require('../Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _Bars = require('./Bars');

var _Bars2 = _interopRequireDefault(_Bars);

var _XYAxis = require('../axis/XYAxis');

var _XYAxis2 = _interopRequireDefault(_XYAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarChart = function BarChart(props) {
  return _react2.default.createElement(
    _Chart2.default,
    props,
    _react2.default.createElement(_Bars2.default, props)
  );
};

BarChart.propTypes = {
  data: _react.PropTypes.array.isRequired,
  height: _react.PropTypes.number,
  padding: _react.PropTypes.number,
  title: _react.PropTypes.string,
  width: _react.PropTypes.number
};

BarChart.defaultProps = {
  height: 350,
  padding: 30,
  width: 300
};

exports.default = BarChart;