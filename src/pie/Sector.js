import React, {PropTypes, Component} from 'react';
import d3 from 'd3';

export default class Sector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      opacity:'arc'
    }
  }

  render() {
    let outerRadius = this.props.width/2.2;
    let innerRadius = 0;
    let arc = d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);
    let data = this.props.data;
    let center = 'translate(' + arc.centroid(data) + ')';
    return (
      <g>
        <path fill={this.props.color} d={arc(this.props.data)}></path>
        <text fill="white" transform={center} textAnchor="middle" fontSize="15px">
          {data.value}
        </text>
      </g>
    );
  }
}
