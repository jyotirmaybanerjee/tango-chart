'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Shape = require('d3-shape');

var shapes = _interopRequireWildcard(_d3Shape);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sector = function (_Component) {
  _inherits(Sector, _Component);

  function Sector(props) {
    _classCallCheck(this, Sector);

    var _this = _possibleConstructorReturn(this, (Sector.__proto__ || Object.getPrototypeOf(Sector)).call(this, props));

    _this.state = {
      text: '',
      opacity: 'arc'
    };
    return _this;
  }

  _createClass(Sector, [{
    key: 'render',
    value: function render() {
      var outerRadius = this.props.width / 2.2;
      var innerRadius = 0;
      var arc = shapes.arc().outerRadius(outerRadius).innerRadius(innerRadius);
      var data = this.props.data;
      var center = 'translate(' + arc.centroid(data) + ')';
      var color = this.props.colors;
      return _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { fill: color[this.props.index], d: arc(this.props.data) }),
        _react2.default.createElement(
          'text',
          { fill: 'white', transform: center, textAnchor: 'middle', fontSize: '15px' },
          data.value
        )
      );
    }
  }]);

  return Sector;
}(_react.Component);

exports.default = Sector;


Sector.propTypes = {};