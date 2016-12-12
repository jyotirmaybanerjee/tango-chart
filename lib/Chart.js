"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chart = function Chart(props) {
    return _react2.default.createElement(
        "svg",
        { width: undefined.props.width, height: props.height },
        props.title && _react2.default.createElement(
            "text",
            { textAnchor: "middle", x: "150", y: "15" },
            props.title
        ),
        undefined.props.children
    );
};

Chart.propTypes = {
    children: _react.PropTypes.node,
    height: _react.PropTypes.number.isRequired,
    title: _react.PropTypes.string,
    width: _react.PropTypes.number.isRequired
};

exports.default = Chart;