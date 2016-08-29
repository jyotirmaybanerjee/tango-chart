"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dots = function (_Component) {
  _inherits(Dots, _Component);

  function Dots() {
    _classCallCheck(this, Dots);

    return _possibleConstructorReturn(this, (Dots.__proto__ || Object.getPrototypeOf(Dots)).apply(this, arguments));
  }

  _createClass(Dots, [{
    key: "render",
    value: function render() {
      var _self = this;
      var data = this.props.data.splice(1);
      data.pop();
      var circles = data.map(function (d, i) {
        return _react2.default.createElement("circle", { className: "dot", r: "4", cx: _self.props.x(d.date), cy: _self.props.y(d.y), fill: "#7dc7f4",
          stroke: "#3f5175", strokeWidth: "1px", key: i,
          onMouseOver: _self.props.showToolTip, onMouseOut: _self.props.hideToolTip,
          "data-key": d3.time.format("%b %e")(d.date), "data-value": d.y });
      });

      return _react2.default.createElement(
        "g",
        null,
        circles
      );
    }
  }]);

  return Dots;
}(_react.Component);

Dots.propTypes = {
  data: _react.PropTypes.array,
  x: _react.PropTypes.func,
  y: _react.PropTypes.func
};
exports.default = Dots;