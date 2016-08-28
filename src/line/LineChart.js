import React, {PropTypes, Component} from 'react';
import Chart from '../Chart';
import DataSeries from './DataSeries';

export default class LineChart extends Component {

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
  }

  static defaultProps = {
    height: 600,
    width: 300
  }

  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    let size = { width: this.props.width, height: this.props.height };
    let lineCharts = [];
    let max = 0;

    data.forEach(function(element, index, array) {
      element.data.forEach(function(component, index, array) {
        if(component.y > max) {
          max = component.y;
        }
      });
    });
    let xScale = d3.scale.linear()
      .domain([0, 6])
      .range([0, this.props.width]);

    let yScale = d3.scale.linear()
      .domain([0, max])
      .range([this.props.height, 0]);

    data.forEach(function(element, index, array) {
      lineCharts.push(<DataSeries data={element.data} size={size} xScale={xScale} yScale={yScale} key={element.label} ref={element.label} color={element.color} />);
    });

    return (
      <Chart width={this.props.width} height={this.props.height}>
        {lineCharts}
      </Chart>
    );
  }
}
