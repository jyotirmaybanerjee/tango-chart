import React, {PropTypes, Component} from 'react';
import d3 from 'd3';
import Chart from '../Chart';
import DataCircles  from './DataCircles';
import XYAxis       from '../axis/XYAxis';

import {xScale, yScale} from '../helpers/D3Helpers';

export default class ScatteredPlot extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.number,
    title: PropTypes.string,
    data: PropTypes.array.isRequired
  }

  static defaultProps = {
    width: 300,
    height: 350,
    padding: 0,
    title: ''
  }

  constructor(props) {
    super(props);
  }

  render() {
    const scales = { xScale: xScale(this.props.padding, this.props.width, this.props.data), yScale: yScale(this.props.padding, this.props.height, this.props.data) };
    return (
        <Chart width={this.props.width} height={this.props.height} title={this.props.title}>
          <DataCircles {...this.props} {...scales} />
          <XYAxis height={this.props.height} width={this.props.width} padding={this.props.padding} {...scales}/>
        </Chart>
    );
  }
}
