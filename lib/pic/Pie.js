'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chart = require('../Chart');

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie = function (_Component) {
  _inherits(Pie, _Component);

  function Pie(props) {
    _classCallCheck(this, Pie);

    return _possibleConstructorReturn(this, (Pie.__proto__ || Object.getPrototypeOf(Pie)).call(this, props));
  }

  _createClass(Pie, [{
    key: 'render',
    value: function render() {
      var colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Chart2.default,
          { width: this.props.width, height: this.props.height },
          _react2.default.createElement(DataSeries, { data: this.props.data, colors: colors, width: this.props.width, height: this.props.height })
        ),
        'MyComponent'
      );
    }
  }]);

  return Pie;
}(_react.Component);

Pie.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  title: _react.PropTypes.string,
  data: _react.PropTypes.array.isRequired
};
Pie.defaultProps = {
  width: 300,
  height: 350,
  title: '',
  Legend: true
};
exports.default = Pie;