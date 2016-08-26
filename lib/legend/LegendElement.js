'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LegendElement = function (_React$Component) {
  _inherits(LegendElement, _React$Component);

  function LegendElement(props) {
    _classCallCheck(this, LegendElement);

    return _possibleConstructorReturn(this, (LegendElement.__proto__ || Object.getPrototypeOf(LegendElement)).call(this, props));
  }

  _createClass(LegendElement, [{
    key: 'render',
    value: function render() {
      var position = 'translate(' + this.props.xpos + ',' + this.props.ypos + ')';
      return _react2.default.createElement(
        'g',
        { transform: position },
        _react2.default.createElement('rect', { width: '18', height: '18', fill: this.props.color }),
        _react2.default.createElement(
          'text',
          { x: '24', y: '9', dy: '.35em' },
          this.props.data
        )
      );
    }
  }]);

  return LegendElement;
}(_react2.default.Component);

LegendElement.propTypes = {
  color: _react.PropTypes.string,
  data: _react.PropTypes.string.isRequired
};
exports.default = LegendElement;