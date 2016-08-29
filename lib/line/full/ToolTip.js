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

var ToolTip = function (_Component) {
  _inherits(ToolTip, _Component);

  function ToolTip() {
    _classCallCheck(this, ToolTip);

    return _possibleConstructorReturn(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).apply(this, arguments));
  }

  _createClass(ToolTip, [{
    key: 'render',
    value: function render() {

      var visibility = 'hidden';
      var transform = '';
      var x = 0;
      var y = 0;
      var width = 150,
          height = 70;
      var transformText = 'translate(' + width / 2 + ',' + (height / 2 - 5) + ')';
      var transformArrow = '';

      if (this.props.tooltip.display === true) {
        var position = this.props.tooltip.pos;
        x = position.x;
        y = position.y;
        visibility = 'visible';

        if (y > height) {
          transform = 'translate(' + (x - width / 2) + ',' + (y - height - 20) + ')';
          transformArrow = 'translate(' + (width / 2 - 20) + ',' + (height - 2) + ')';
        } else if (y < height) {
          transform = 'translate(' + (x - width / 2) + ',' + (Math.round(y) + 20) + ')';
          transformArrow = 'translate(' + (width / 2 - 20) + ',' + 0 + ') rotate(180,20,0)';
        }
      } else {
        visibility = 'hidden';
      }
      return _react2.default.createElement(
        'g',
        { transform: transform },
        _react2.default.createElement('rect', { 'class': 'shadow', is: true, width: width, height: height, rx: '5', ry: '5', visibility: visibility, fill: '#6391da', opacity: '.9' }),
        _react2.default.createElement('polygon', { 'class': 'shadow', is: true, points: '10,0  30,0  20,10', transform: transformArrow,
          fill: '#6391da', opacity: '.9', visibility: visibility }),
        _react2.default.createElement(
          'text',
          { is: true, visibility: visibility, transform: transformText },
          _react2.default.createElement(
            'tspan',
            { is: true, x: '0', 'text-anchor': 'middle', 'font-size': '15px', fill: '#ffffff' },
            this.props.tooltip.data.key
          ),
          _react2.default.createElement(
            'tspan',
            { is: true, x: '0', 'text-anchor': 'middle', dy: '25', 'font-size': '20px', fill: '#a9f3ff' },
            this.props.tooltip.data.value + ' visits'
          )
        )
      );
    }
  }]);

  return ToolTip;
}(_react.Component);

ToolTip.propTypes = {
  tooltip: _react.PropTypes.object
};
exports.default = ToolTip;