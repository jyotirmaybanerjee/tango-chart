import React, {PropTypes, Component} from 'react';
import d3 from 'd3';
import Chart from '../Chart';
import DataCircles  from './DataCircles';
import XYAxis       from '../axis/XYAxis';

// import D3Helpers       from '../helpers/D3Helpers';

  // Returns the largest X coordinate from the data set
  const xMax   = (data)  => d3.max(data, (d) => d[0]);

  // Returns the higest Y coordinate from the data set
  const yMax   = (data)  => d3.max(data, (d) => d[1]);

  // Returns a function that "scales" X coordinates from the data to fit the chart
  const xScale = (props) => {
    return d3.scale.linear()
      .domain([0, xMax(props.data)])
      .range([props.padding, props.width - props.padding * 2]);
  };

  // Returns a function that "scales" Y coordinates from the data to fit the chart
  const yScale = (props) => {
    return d3.scale.linear()
      .domain([0, yMax(props.data)])
      .range([props.height - props.padding, props.padding]);
  };

export default class ScatteredPlot extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    data: PropTypes.array.isRequired
  }

  static defaultProps = {
    width: 300,
    height: 350,
    title: '',
    Legend: true
  }

  constructor(props) {
    super(props);
  }

  render() {
    const scales = { xScale: xScale(this.props), yScale: yScale(this.props) };
    return (
        <Chart width={this.props.width} height={this.props.height} title={this.props.title}>
          <DataCircles {...this.props} {...scales} />
          <XYAxis {...this.props} {...scales} />
        </Chart>
    );
  }
}

ScatteredPlot.propTypes = {
};
