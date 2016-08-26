import React, {PropTypes, Component} from 'react';
import Chart from '../Chart';
import DataSeries from './DataSeries';

export default class Bar extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
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
    return (
      <rect fill={this.props.color}
        width={this.props.width} height={this.props.height}
        x={this.props.offset} y={this.props.availableHeight - this.props.height} />
    );
  }
}
