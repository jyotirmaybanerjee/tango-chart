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

var _Axis = require('./Axis');

var _Axis2 = _interopRequireDefault(_Axis);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Dots = require('./Dots');

var _Dots2 = _interopRequireDefault(_Dots);

var _ToolTip = require('./ToolTip');

var _ToolTip2 = _interopRequireDefault(_ToolTip);

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
      tooltip: { display: false, data: { key: '', value: '' } }
    };
    return _this;
  }

  _createClass(LineChart, [{
    key: 'render',
    value: function render() {

      var props = this.props;
      var data = this.props.data;
      var margin = { top: 5, right: 50, bottom: 20, left: 50 };
      var w = this.props.width - (margin.left + margin.right);
      var h = this.props.height - (margin.top + margin.bottom);
      var size = { width: w, height: h };
      var lineCharts = [];
      var max = 0;
      var xAxis = null;
      var yAxis = null;
      var xGrid = null;
      var yGrid = null;

      data.forEach(function (element, index, array) {
        element.data.forEach(function (component, index, array) {
          if (component.y > max) {
            max = component.y;
          }
        });
      });

      var xScale = d3.scale.linear().domain([0, 6]).range([0, w]);

      var yScale = d3.scale.linear().domain([0, max]).range([h, 0]);

      if (props.axisX) {
        xAxis = d3.svg.axis().scale(xScale).orient('bottom').tickValues(data[0].data.map(function (d, i) {
          if (i > 0) return d.x;
        }).splice(1)).ticks(5);
      }
      if (props.axisY) {
        yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(5);
      }
      if (props.gridX) {
        xGrid = d3.svg.axis().scale(xScale).orient('bottom').ticks(5).tickSize(-h, 0, 0).tickFormat('');
      }
      if (props.gridY) {
        yGrid = d3.svg.axis().scale(yScale).orient('left').ticks(5).tickSize(-w, 0, 0).tickFormat('');
      }

      data.forEach(function (element, index, array) {
        lineCharts.push(_react2.default.createElement(_DataSeries2.default, { data: element.data, size: size, xScale: xScale, yScale: yScale, key: element.label, ref: element.label, color: element.color }));
      });
      var transform = 'translate(' + margin.left + ',' + margin.top + ')';

      var xgrid = _react2.default.createElement('span', null);
      var ygrid = _react2.default.createElement('span', null);
      var xaxis = _react2.default.createElement('span', null);
      var yaxis = _react2.default.createElement('span', null);

      if (props.axisX) {
        xaxis = _react2.default.createElement(_Axis2.default, { h: h, axis: xAxis, axisType: 'x' });
      }
      if (props.axisY) {
        yaxis = _react2.default.createElement(_Axis2.default, { h: h, axis: yAxis, axisType: 'y' });
      }
      if (props.gridX) {
        xgrid = _react2.default.createElement(_Grid2.default, { h: h, grid: xGrid, gridType: 'x' });
      }
      if (props.gridY) {
        ygrid = _react2.default.createElement(_Grid2.default, { h: h, grid: yGrid, gridType: 'y' });
      }
      return _react2.default.createElement(
        _Chart2.default,
        { width: this.props.width, height: this.props.height },
        _react2.default.createElement(
          'g',
          { transform: transform },
          ygrid,
          xgrid,
          yaxis,
          xaxis,
          lineCharts
        )
      );
    }
  }]);

  return LineChart;
}(_react.Component);

LineChart.propTypes = {
  height: _react.PropTypes.number,
  width: _react.PropTypes.number,
  axisX: _react.PropTypes.bool,
  axisY: _react.PropTypes.bool,
  gridX: _react.PropTypes.bool,
  gridY: _react.PropTypes.bool
};
LineChart.defaultProps = {
  height: 400,
  width: 600,
  axisX: false,
  axisY: false,
  gridX: false,
  gridY: false
};
exports.default = LineChart;