'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _Sector = require('./Sector');

var _Sector2 = _interopRequireDefault(_Sector);

var _DonutSector = require('./DonutSector');

var _DonutSector2 = _interopRequireDefault(_DonutSector);

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

      var data = this.props.data;
      var width = this.props.width;
      var height = this.props.height;
      var pie = _d2.default.layout.pie();
      var result = data.map(function (item) {
        return item.value;
      });
      var names = data.map(function (item) {
        return item.label;
      });
      var sum = result.reduce(function (memo, num) {
        return memo + num;
      }, 0);
      var position = 'translate(' + width / 2 + ',' + height / 2 + ')';
      var arcs = pie(result);
      var self = this;
      var bars = arcs.map(function (point, i) {

        if (self.props.donut) {
          return _react2.default.createElement(_DonutSector2.default, { data: point, key: i, index: i, name: names[i], color: self.props.data[i].color, total: sum, width: width, height: height });
        } else {
          return _react2.default.createElement(_Sector2.default, { data: point, key: i, index: i, name: names[i], color: self.props.data[i].color, total: sum, width: width, height: height });
        }
      });
      return _react2.default.createElement(
        'g',
        { transform: position },
        bars
      );
    }
  }]);

  return DataSeries;
}(_react.Component);

DataSeries.propTypes = {
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  data: _react.PropTypes.array.isRequired
};
exports.default = DataSeries;