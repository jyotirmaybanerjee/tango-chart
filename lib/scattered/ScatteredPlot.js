'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _Chart = require('../Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _DataCircles = require('./DataCircles');

var _DataCircles2 = _interopRequireDefault(_DataCircles);

var _XYAxis = require('../axis/XYAxis');

var _XYAxis2 = _interopRequireDefault(_XYAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import D3Helpers       from '../helpers/D3Helpers';

// Returns the largest X coordinate from the data set
var xMax = function xMax(data) {
  return _d2.default.max(data, function (d) {
    return d[0];
  });
};

// Returns the higest Y coordinate from the data set
var yMax = function yMax(data) {
  return _d2.default.max(data, function (d) {
    return d[1];
  });
};

// Returns a function that "scales" X coordinates from the data to fit the chart
var xScale = function xScale(props) {
  return _d2.default.scale.linear().domain([0, xMax(props.data)]).range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
var yScale = function yScale(props) {
  return _d2.default.scale.linear().domain([0, yMax(props.data)]).range([props.height - props.padding, props.padding]);
};

var ScatteredPlot = function (_Component) {
  _inherits(ScatteredPlot, _Component);

  function ScatteredPlot(props) {
    _classCallCheck(this, ScatteredPlot);

    return _possibleConstructorReturn(this, (ScatteredPlot.__proto__ || Object.getPrototypeOf(ScatteredPlot)).call(this, props));
  }

  _createClass(ScatteredPlot, [{
    key: 'render',
    value: function render() {
      var scales = { xScale: xScale(this.props), yScale: yScale(this.props) };
      return _react2.default.createElement(
        _Chart2.default,
        { width: this.props.width, height: this.props.height, title: this.props.title },
        _react2.default.createElement(_DataCircles2.default, _extends({}, this.props, scales)),
        _react2.default.createElement(_XYAxis2.default, _extends({}, this.props, scales))
      );
    }
  }]);

  return ScatteredPlot;
}(_react.Component);

ScatteredPlot.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  title: _react.PropTypes.string,
  data: _react.PropTypes.array.isRequired
};
ScatteredPlot.defaultProps = {
  width: 300,
  height: 350,
  title: '',
  Legend: true
};
exports.default = ScatteredPlot;


ScatteredPlot.propTypes = {};