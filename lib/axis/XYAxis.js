'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XYAxis = function (_Component) {
  _inherits(XYAxis, _Component);

  function XYAxis(props) {
    _classCallCheck(this, XYAxis);

    return _possibleConstructorReturn(this, (XYAxis.__proto__ || Object.getPrototypeOf(XYAxis)).call(this, props));
  }

  _createClass(XYAxis, [{
    key: 'render',
    value: function render() {
      var xSettings = {
        translate: 'translate(0, ' + (this.props.height - this.props.padding) + ')',
        scale: this.props.xScale,
        orient: 'bottom'
      };
      var ySettings = {
        translate: 'translate(' + this.props.padding + ', 0)',
        scale: this.props.yScale,
        orient: 'left'
      };

      return _react2.default.createElement(
        'g',
        { className: 'xy-axis' },
        _react2.default.createElement(_axis2.default, xSettings),
        _react2.default.createElement(_axis2.default, ySettings)
      );
    }
  }]);

  return XYAxis;
}(_react.Component);

XYAxis.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  padding: _react.PropTypes.number
};
XYAxis.defaultProps = {
  width: 300,
  height: 350,
  padding: 5
};
exports.default = XYAxis;