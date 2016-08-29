'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StackedBar = require('./StackedBar');

var _StackedBar2 = _interopRequireDefault(_StackedBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackedDataSeries = function (_Component) {
  _inherits(StackedDataSeries, _Component);

  function StackedDataSeries(props) {
    _classCallCheck(this, StackedDataSeries);

    return _possibleConstructorReturn(this, (StackedDataSeries.__proto__ || Object.getPrototypeOf(StackedDataSeries)).call(this, props));
  }

  _createClass(StackedDataSeries, [{
    key: 'render',
    value: function render() {

      var self = this;
      var props = this.props;
      var allSeries = props.allSeries;
      var yScale = props.yScale;
      var xScale = d3.scale.ordinal().domain(d3.range(props.data.length)).rangeRoundBands([0, props.size.width], 0.05);
      var otherSeries = allSeries.filter(function (component) {
        return component.label !== props.label;
      });
      var bars = props.data.map(function (point, i) {

        var yOffset = 0;

        otherSeries.map(function (series) {
          yOffset = yOffset + series.data[i];
        });

        //   <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
        return _react2.default.createElement(_StackedBar2.default, { height: yScale(point), width: xScale.rangeBand(), x: xScale(i), y: props.size.height - yScale(yOffset) - yScale(point), color: props.color, key: i });
      });
      return _react2.default.createElement(
        'g',
        null,
        bars
      );
    }
  }]);

  return StackedDataSeries;
}(_react.Component);

StackedDataSeries.propTypes = {
  title: _react.PropTypes.string,
  data: _react.PropTypes.array.isRequired
};
StackedDataSeries.defaultProps = {
  title: '',
  data: []
};
exports.default = StackedDataSeries;