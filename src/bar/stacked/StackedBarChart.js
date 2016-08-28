import React, { Component, PropTypes } from 'react';
import d3 from 'd3';
import StackedDataSeries from './StackedDataSeries';
import Chart from '../../Chart';

export default class StackedBarChart extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  }

  static defaultProps = {
    width: 600,
    height: 300
  }

  constructor(props) {
    super(props);
  }

  render() {

    let self = this;
    let data = this.props.data;
    let size = { width: this.props.width, height: this.props.height };
    let totals = [];
    let stackedSerieses = [];
    data.forEach(function(element, index, array) {
      element.data.forEach(function(element, index, array) {
        if(totals[index]) {
          totals[index] = totals[index] + element;
        } else {
          totals[index] = element;
        }
      });
    });
    let yScale = d3.scale.linear()
      .domain([0, d3.max(totals)])
      .range([0, this.props.height]);
    data.forEach(function(element, index, array) {
      stackedSerieses.push(<StackedDataSeries key={element.label} data={element.data} label={element.label} color={element.color} size={size} yScale={yScale} allSeries={self.props.data} />);
    });

    return (
      <Chart width={this.props.width} height={this.props.height}>
        {stackedSerieses}
      </Chart>
    );
  }
}
