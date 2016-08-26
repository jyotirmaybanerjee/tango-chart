'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var D3Helpers = function () {
  function D3Helpers() {
    _classCallCheck(this, D3Helpers);
  }

  _createClass(D3Helpers, [{
    key: 'xMax',


    /*
     * Returns the largest X coordinate from the data set
     */
    value: function xMax(data) {
      return _d2.default.max(data, function (d) {
        return d[0];
      });
    }

    /*
     * Returns the higest Y coordinate from the data set
     */

  }, {
    key: 'yMax',
    value: function yMax(data) {
      return _d2.default.max(data, function (d) {
        return d[1];
      });
    }

    /*
     * Returns a function that "scales" X coordinates from the data to fit the chart
     */

  }, {
    key: 'xScale',
    value: function xScale(props) {
      return _d2.default.scale.linear().domain([0, this.xMax(props.data)]).range([props.padding, props.width - props.padding * 2]);
    }

    /*
     * Returns a function that "scales" Y coordinates from the data to fit the chart
     */

  }, {
    key: 'yScale',
    value: function yScale(props) {
      return _d2.default.scale.linear().domain([0, this.yMax(props.data)]).range([props.height - props.padding, props.padding]);
    }
  }]);

  return D3Helpers;
}();

module.exports = D3Helpers();