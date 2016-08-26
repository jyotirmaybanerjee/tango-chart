import React, {PropTypes, Component} from 'react';
import Chart from '../Chart';
import DataSeries from './DataSeries';

export default class BarChart extends Component {

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
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={this.props.data} width={this.props.width} height={this.props.height} color="cornflowerblue" />
      </Chart>
    );
  }
}
