'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _StackedDataSeries = require('./StackedDataSeries');

var _StackedDataSeries2 = _interopRequireDefault(_StackedDataSeries);

var _Chart = require('../../Chart');

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackedBarChart = function (_Component) {
  _inherits(StackedBarChart, _Component);

  function StackedBarChart(props) {
    _classCallCheck(this, StackedBarChart);

    return _possibleConstructorReturn(this, (StackedBarChart.__proto__ || Object.getPrototypeOf(StackedBarChart)).call(this, props));
  }

  _createClass(StackedBarChart, [{
    key: 'render',
    value: function render() {

      var self = this;
      var data = this.props.data;
      var size = { width: this.props.width, height: this.props.height };
      var totals = [];
      var stackedSerieses = [];
      data.forEach(function (element, index, array) {
        element.data.forEach(function (element, index, array) {
          if (totals[index]) {
            totals[index] = totals[index] + element;
          } else {
            totals[index] = element;
          }
        });
      });
      var yScale = _d2.default.scale.linear().domain([0, _d2.default.max(totals)]).range([0, this.props.height]);
      data.forEach(function (element, index, array) {
        stackedSerieses.push(_react2.default.createElement(_StackedDataSeries2.default, { key: element.label, data: element.data, label: element.label, color: element.color, size: size, yScale: yScale, allSeries: self.props.data }));
      });

      return _react2.default.createElement(
        _Chart2.default,
        { width: this.props.width, height: this.props.height },
        stackedSerieses
      );
    }
  }]);

  return StackedBarChart;
}(_react.Component);

StackedBarChart.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number
};
StackedBarChart.defaultProps = {
  width: 600,
  height: 300
};
exports.default = StackedBarChart;