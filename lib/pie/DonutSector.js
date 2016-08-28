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

var DonutSector = function (_Component) {
  _inherits(DonutSector, _Component);

  function DonutSector(props) {
    _classCallCheck(this, DonutSector);

    var _this = _possibleConstructorReturn(this, (DonutSector.__proto__ || Object.getPrototypeOf(DonutSector)).call(this, props));

    _this.onMouseOver = function () {
      _this.setState({ text: '', opacity: 'arc-hover' });
      var percent = _this.props.data.value / _this.props.total * 100;
      percent = percent.toFixed(1);
      _this.setState({ text: percent + ' %' });
    };

    _this.onMouseOut = function () {
      _this.setState({ text: '', opacity: 'arc' });
    };

    _this.onClick = function () {
      console.log('You clicked ' + _this.props.label);
    };

    _this.state = {
      text: '',
      opacity: 'arc'
    };
    return _this;
  }

  _createClass(DonutSector, [{
    key: 'render',
    value: function render() {
      var outerRadius = this.props.width / 2.2;
      var innerRadius = this.props.width / 8;
      var arc = _d2.default.svg.arc().outerRadius(outerRadius).innerRadius(innerRadius);
      var data = this.props.data;
      var center = 'translate(' + arc.centroid(data) + ')';
      var percentCenter = 'translate(0,3)';
      // let color = this.props.color;
      return _react2.default.createElement(
        'g',
        { onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut, onClick: this.onClick },
        _react2.default.createElement('path', { className: this.state.opacity, fill: this.props.color, d: arc(this.props.data) }),
        _react2.default.createElement(
          'text',
          { fill: 'white', transform: center, textAnchor: 'middle', fontSize: '15px' },
          data.value
        ),
        _react2.default.createElement(
          'text',
          { fill: this.props.color, stroke: this.props.color, fontSize: '15px', transform: percentCenter, textAnchor: 'middle' },
          this.state.text
        )
      );
    }
  }]);

  return DonutSector;
}(_react.Component);

exports.default = DonutSector;