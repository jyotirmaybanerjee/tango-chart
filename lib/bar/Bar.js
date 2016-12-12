'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bar = function Bar(props) {
  return _react2.default.createElement('rect', { fill: props.color,
    width: props.width, height: props.height,
    x: props.offset, y: props.availableHeight - props.height });
};

Bar.propTypes = {
  availableHeight: _react.PropTypes.number,
  color: _react.PropTypes.string,
  height: _react.PropTypes.number,
  offset: _react.PropTypes.number,
  width: _react.PropTypes.number
};

exports.default = Bar;