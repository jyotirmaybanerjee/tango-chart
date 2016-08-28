import React, {PropTypes, Component} from 'react';
import Chart from '../Chart';
import DataSeries from './DataSeries';
import XYAxis       from '../axis/XYAxis';

export default class BarChart extends Component {

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
    padding: 30,
    title: ''
  }

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Chart width={this.props.width} height={this.props.height} title={this.props.title}>
        <DataSeries data={this.props.data} width={this.props.width} padding={this.props.padding} height={this.props.height} color={this.props.color} />
      </Chart>
    );
  }
}
