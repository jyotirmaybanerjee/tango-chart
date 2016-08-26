'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Axis = function (_React$Component) {
  _inherits(Axis, _React$Component);

  function Axis(props) {
    _classCallCheck(this, Axis);

    return _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).call(this, props));
  }

  _createClass(Axis, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderAxis();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderAxis();
    }
  }, {
    key: 'renderAxis',
    value: function renderAxis() {
      var node = this.refs.axis;
      var axis = _d2.default.svg.axis().orient(this.props.orient).ticks(5).scale(this.props.scale);
      _d2.default.select(node).call(axis);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('g', { className: 'axis', ref: 'axis', transform: this.props.translate });
    }
  }]);

  return Axis;
}(_react2.default.Component);

exports.default = Axis;


Axis.propTypes = {};