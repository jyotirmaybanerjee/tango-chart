'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataCircles = function (_Component) {
  _inherits(DataCircles, _Component);

  function DataCircles() {
    _classCallCheck(this, DataCircles);

    return _possibleConstructorReturn(this, (DataCircles.__proto__ || Object.getPrototypeOf(DataCircles)).apply(this, arguments));
  }

  _createClass(DataCircles, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var circles = props.data.map(function (coords, index) {
        return _react2.default.createElement(_Circle2.default, { coords: coords, key: index, index: index, xScale: props.xScale, yScale: props.yScale });
      });
      return _react2.default.createElement(
        'g',
        null,
        circles
      );
    }
  }]);

  return DataCircles;
}(_react.Component);

DataCircles.propTypes = {
  data: _react.PropTypes.array.isRequired
};
exports.default = DataCircles;