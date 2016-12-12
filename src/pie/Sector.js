import React, {PropTypes, Component} from 'react';
import d3 from 'd3';

export default class Sector extends Component {

  static propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
    data: PropTypes.array
  }

  state = {
    text: '',
    opacity: 'arc'
  }

  render() {
    const props = this.props;
    const outerRadius = props.width / 2.2;
    const innerRadius = 0;
    const arc = d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);
    const center = 'translate(' + arc.centroid(props.data) + ')';
    return (
      <g>
        <path
          fill={props.color}
          d={arc(props.data)}
        />
        <text
          fill="white"
          transform={center}
          textAnchor="middle"
          fontSize="15px"
        >
          {props.data.value}
        </text>
      </g>
    );
  }
}
