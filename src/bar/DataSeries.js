import React, {PropTypes, Component} from 'react';
import d3 from 'd3';

import Bar from './Bar';

export default class DataSeries extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array.isRequired,
    offset: PropTypes.number
  }

  static defaultProps = {
    width: 0,
    height: 0,
    offset: 0
  }

  constructor(props) {
    super(props);
  }

  render() {

    let props = this.props;
    let yScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    let xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    let bars = this.props.data.map(function(point, i) {
      return (
        <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
      )
    });

    return (
      <g>{bars}</g>
    );
  }
}
