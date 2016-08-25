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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Donut = function (_Component) {
  _inherits(Donut, _Component);

  function Donut(props) {
    _classCallCheck(this, Donut);

    return _possibleConstructorReturn(this, (Donut.__proto__ || Object.getPrototypeOf(Donut)).call(this, props));
  }

  _createClass(Donut, [{
    key: 'render',
    value: function render() {
      var colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Chart2.default,
          { width: this.props.width, height: this.props.height },
          _react2.default.createElement(_DataSeries2.default, { data: this.props.data, colors: colors, width: this.props.width, height: this.props.height, donut: true })
        )
      );
    }
  }]);

  return Donut;
}(_react.Component);

Donut.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  title: _react.PropTypes.string,
  data: _react.PropTypes.array.isRequired
};
Donut.defaultProps = {
  width: 300,
  height: 350,
  title: '',
  Legend: true
};
exports.default = Donut;