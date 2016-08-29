'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _Bar = require('./Bar');

var _Bar2 = _interopRequireDefault(_Bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataSeries = function (_Component) {
  _inherits(DataSeries, _Component);

  function DataSeries(props) {
    _classCallCheck(this, DataSeries);

    return _possibleConstructorReturn(this, (DataSeries.__proto__ || Object.getPrototypeOf(DataSeries)).call(this, props));
  }

  _createClass(DataSeries, [{
    key: 'render',
    value: function render() {

      var dataArray = this.props.data.map(function (item) {
        return item.value;
      });

      var props = this.props;
      var yScale = _d2.default.scale.linear().domain([0, _d2.default.max(dataArray)]).range([0, this.props.height]);

      var xScale = _d2.default.scale.ordinal().domain(_d2.default.range(this.props.data.length)).rangeRoundBands([0, this.props.width], 0.05);

      var bars = this.props.data.map(function (point, i) {
        return _react2.default.createElement(_Bar2.default, { height: yScale(point.value), width: xScale.rangeBand(), offset: xScale(i), availableHeight: props.height, color: props.color || point.color, key: i });
      });

      return _react2.default.createElement(
        'g',
        null,
        bars
      );
    }
  }]);

  return DataSeries;
}(_react.Component);

DataSeries.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  data: _react.PropTypes.array.isRequired,
  padding: _react.PropTypes.number
};
DataSeries.defaultProps = {
  width: 0,
  height: 0,
  padding: 0
};
exports.default = DataSeries;