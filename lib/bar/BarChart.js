'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chart = require('../Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _DataSeries = require('./DataSeries');

var _DataSeries2 = _interopRequireDefault(_DataSeries);

var _XYAxis = require('../axis/XYAxis');

var _XYAxis2 = _interopRequireDefault(_XYAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarChart = function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart(props) {
    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call(this, props));
  }

  _createClass(BarChart, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _Chart2.default,
        { width: this.props.width, height: this.props.height, title: this.props.title },
        _react2.default.createElement(_DataSeries2.default, { data: this.props.data, width: this.props.width, padding: this.props.padding, height: this.props.height, color: 'cornflowerblue' })
      );
    }
  }]);

  return BarChart;
}(_react.Component);

BarChart.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  padding: _react.PropTypes.number,
  title: _react.PropTypes.string,
  data: _react.PropTypes.array.isRequired
};
BarChart.defaultProps = {
  width: 300,
  height: 350,
  padding: 30,
  title: ''
};
exports.default = BarChart;