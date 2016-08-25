import React, {PropTypes, Component} from 'react';
import * as shapes from 'd3-shape';

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
    let arc = shapes.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);
    let data = this.props.data;
    let center = 'translate(' + arc.centroid(data) + ')';
    let color = this.props.colors;
    return (
      <g>
        <path fill={color[this.props.index]} d={arc(this.props.data)}></path>
        <text fill="white" transform={center} textAnchor="middle" fontSize="15px">
          {data.value}
        </text>
      </g>
    );
  }
}

Sector.propTypes = {
};
