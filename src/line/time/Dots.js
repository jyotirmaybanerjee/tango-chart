import React, {PropTypes, Component} from 'react';
import _ from 'lodash';
import d3 from 'd3';

export default class Dots extends Component {

  static propTypes = {
    data: PropTypes.array,
    x: PropTypes.func,
    y: PropTypes.func
  }

  render() {
    const _self = this;
    const data = this.props.data.splice(1);
    data.pop();
    const circles = data.map((d, i) => {
      return (
        <circle
          className="dot"
          r="4"
          cx={_self.props.x(d.date)}
          cy={_self.props.y(d.y)}
          fill="#7dc7f4"
          stroke="#3f5175"
          strokeWidth="1px"
          key={i}
          onMouseOver={_self.props.showToolTip}
          onFocus={_.noop}
          onMouseOut={_self.props.hideToolTip}
          onBlur={_.noop}
          data-key={d3.time.format('%b %e')(d.date)}
          data-value={d.y}
        />
      );
    });

    return <g>{circles}</g>;
  }
}
