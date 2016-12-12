'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _Bar = require('./Bar');

var _Bar2 = _interopRequireDefault(_Bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bars = function Bars(props) {
  var dataArray = props.data.map(function (item) {
    return item.value;
  });

  var yScale = _d2.default.scale.linear().domain([0, _d2.default.max(dataArray)]).range([0, props.height]);

  var xScale = _d2.default.scale.ordinal().domain(_d2.default.range(props.data.length)).rangeRoundBands([0, props.width], 0.05);

  var bars = props.data.map(function (point, i) {
    return _react2.default.createElement(_Bar2.default, { height: yScale(point.value), width: xScale.rangeBand(), offset: xScale(i), availableHeight: props.height, color: props.color || point.color, key: i });
  });

  return _react2.default.createElement(
    'g',
    null,
    bars
  );
};

Bars.propTypes = {
  data: _react.PropTypes.array.isRequired,
  height: _react.PropTypes.number,
  padding: _react.PropTypes.number,
  width: _react.PropTypes.number
};

Bars.defaultProps = {
  height: 0,
  padding: 0,
  width: 0
};

exports.default = Bars;