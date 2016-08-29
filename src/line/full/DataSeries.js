import React, {PropTypes, Component} from 'react';
import d3 from 'd3';
import Line from './Line';

export default class DataSeries extends Component {

  static propTypes = {
    data: PropTypes.array,
    interpolate: PropTypes.string
  }

  static defaultProps = {
    data: [],
    interpolate: 'linear'
  }

  render() {

    let self = this;
    let props = this.props;
    let yScale = props.yScale;
    let xScale = props.xScale;

    let path = d3.svg.line()
        .x(function(d) { return xScale(d.x); })
        .y(function(d) { return yScale(d.y); })
        .interpolate(this.props.interpolate);

    return (
      <Line path={path(this.props.data)} color={this.props.color} />
    );
  }
}
