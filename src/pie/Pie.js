import React, { Component, PropTypes } from 'react';
import Chart from '../Chart';
import DataSeries from './DataSeries';

export default class Pie extends Component {

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
    let colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
    return (
      <div>
        <Chart width={this.props.width} height={this.props.height}>
          <DataSeries data={this.props.data} colors={colors} width=
            {this.props.width} height={this.props.height}/>
        </Chart>
      </div>
    );
  }
}