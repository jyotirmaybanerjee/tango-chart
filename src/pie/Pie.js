import React, { Component, PropTypes } from 'react';
import Chart from '../Chart';
import Legend from '../legend/Legend';
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
    title: ''
  }

  constructor(props) {
    super(props);
  }

  render() {

    let legend = <span />;
    if(this.props.legend) {
      legend = <Legend data={this.props.data} width={this.props.width - 100} height={this.props.height} />;
    }
    return (
      <div>
        <Chart width={this.props.width} height={this.props.height} title={this.props.title}>
          <DataSeries data={this.props.data} width=
            {this.props.width} height={this.props.height}/>
        </Chart>
        {legend}
      </div>
    );
  }
}
