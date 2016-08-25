'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LegendElement = require('./LegendElement');

var _LegendElement2 = _interopRequireDefault(_LegendElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Legend = function (_Component) {
  _inherits(Legend, _Component);

  function Legend(props) {
    _classCallCheck(this, Legend);

    return _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).call(this, props));
  }

  _createClass(Legend, [{
    key: 'render',
    value: function render() {
      var color = this.props.colors;
      var data = this.props.data;
      var elements = data.map(function (item, i) {
        return _react2.default.createElement(_LegendElement2.default, { color: color, xpos: '0', ypos: 100 + i * 20, data: item.name, key: i, ikey: i });
      });

      return _react2.default.createElement(
        'svg',
        { className: 'legend', width: this.props.width, height: this.props.height },
        elements
      );
    }
  }]);

  return Legend;
}(_react.Component);

exports.default = Legend;


Legend.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  colors: _react.PropTypes.array.isRequired,
  data: _react.PropTypes.array.isRequired
};