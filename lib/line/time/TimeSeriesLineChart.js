'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Axis = require('./Axis');

var _Axis2 = _interopRequireDefault(_Axis);

var _Dots = require('./Dots');

var _Dots2 = _interopRequireDefault(_Dots);

var _ToolTip = require('./ToolTip');

var _ToolTip2 = _interopRequireDefault(_ToolTip);

var _Chart = require('../../Chart');

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChart = function (_Component) {
  _inherits(LineChart, _Component);

  function LineChart(props) {
    _classCallCheck(this, LineChart);

    var _this = _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, props));

    _this.showToolTip = function (e) {
      e.target.setAttribute('fill', '#FFFFFF');

      _this.setState({ tooltip: {
          display: true,
          data: {
            key: e.target.getAttribute('data-key'),
            value: e.target.getAttribute('data-value')
          },
          pos: {
            x: e.target.getAttribute('cx'),
            y: e.target.getAttribute('cy')
          }
        } });
    };

    _this.hideToolTip = function (e) {
      e.target.setAttribute('fill', '#7dc7f4');
      _this.setState({ tooltip: { display: false, data: { key: '', value: '' } } });
    };

    _this.state = {
      tooltip: { display: false, data: { key: '', value: '' } },
      width: 0
    };
    return _this;
  }

  _createClass(LineChart, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var margin = { top: 5, right: 50, bottom: 20, left: 50 };
      var w = this.props.width - (margin.left + margin.right);
      var h = this.props.height - (margin.top + margin.bottom);

      var parseDate = _d2.default.time.format('%m-%d-%Y').parse;
      data.forEach(function (d) {
        //   d.x = parseDate(d.x);
        d.date = parseDate(d.x);
      });

      var x = _d2.default.time.scale().domain(_d2.default.extent(data, function (d) {
        return d.date;
      })).rangeRound([0, w]);

      var y = _d2.default.scale.linear().domain([0, _d2.default.max(data, function (d) {
        return d.y + 100;
      })]).range([h, 0]);

      var yAxis = _d2.default.svg.axis().scale(y).orient('left').ticks(5);

      var xAxis = _d2.default.svg.axis().scale(x).orient('bottom').tickValues(data.map(function (d, i) {
        if (i > 0) return d.date;
      }).splice(1)).ticks(4);

      var xGrid = _d2.default.svg.axis().scale(x).orient('bottom').ticks(5).tickSize(-h, 0, 0).tickFormat('');

      var yGrid = _d2.default.svg.axis().scale(y).orient('left').ticks(5).tickSize(-w, 0, 0).tickFormat('');

      var interpolations = ['linear', 'step-before', 'step-after', 'basis', 'basis-closed', 'cardinal', 'cardinal-closed'];

      var line = _d2.default.svg.line().x(function (d) {
        return x(d.date);
      }).y(function (d) {
        return y(d.y);
      }).interpolate(interpolations[5]);

      var transform = 'translate(' + margin.left + ',' + margin.top + ')';

      return _react2.default.createElement(
        _Chart2.default,
        { id: this.props.chartId, width: this.props.width, height: this.props.height },
        _react2.default.createElement(
          'g',
          { transform: transform },
          _react2.default.createElement(_Grid2.default, { h: h, grid: yGrid, gridType: 'y' }),
          _react2.default.createElement(_Axis2.default, { h: h, axis: yAxis, axisType: 'y' }),
          _react2.default.createElement(_Axis2.default, { h: h, axis: xAxis, axisType: 'x' }),
          _react2.default.createElement('path', { className: 'line shadow', d: line(data), strokeLinecap: 'round' }),
          _react2.default.createElement(_Dots2.default, { data: data, x: x, y: y, showToolTip: this.showToolTip, hideToolTip: this.hideToolTip }),
          _react2.default.createElement(_ToolTip2.default, { tooltip: this.state.tooltip })
        )
      );
    }
  }]);

  return LineChart;
}(_react.Component);

LineChart.propTypes = {
  width: _react2.default.PropTypes.number,
  height: _react2.default.PropTypes.number,
  chartId: _react2.default.PropTypes.string
};
LineChart.defaultProps = {
  width: 800,
  height: 300,
  chartId: 'ln_chart_1'
};
exports.default = LineChart;