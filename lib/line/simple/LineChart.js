'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chart = require('../../Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _DataSeries = require('./DataSeries');

var _DataSeries2 = _interopRequireDefault(_DataSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChart = function (_Component) {
  _inherits(LineChart, _Component);

  function LineChart(props) {
    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, props));
  }

  _createClass(LineChart, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var size = { width: this.props.width, height: this.props.height };
      var lineCharts = [];
      var max = 0;

      data.forEach(function (element, index, array) {
        element.data.forEach(function (component, index, array) {
          if (component.y > max) {
            max = component.y;
          }
        });
      });
      var xScale = d3.scale.linear().domain([0, 6]).range([0, this.props.width]);

      var yScale = d3.scale.linear().domain([0, max]).range([this.props.height, 0]);

      data.forEach(function (element, index, array) {
        lineCharts.push(_react2.default.createElement(_DataSeries2.default, { data: element.data, size: size, xScale: xScale, yScale: yScale, key: element.label, ref: element.label, color: element.color }));
      });

      return _react2.default.createElement(
        _Chart2.default,
        { width: this.props.width, height: this.props.height },
        lineCharts
      );
    }
  }]);

  return LineChart;
}(_react.Component);

LineChart.propTypes = {
  height: _react.PropTypes.number,
  width: _react.PropTypes.number
};
LineChart.defaultProps = {
  height: 600,
  width: 300
};
exports.default = LineChart;