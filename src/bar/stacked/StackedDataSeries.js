import React, {PropTypes, Component} from 'react';
import StackedBar from './StackedBar';

export default class StackedDataSeries extends Component {

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired
  }

  static defaultProps = {
    title: '',
    data: []
  }

  constructor(props) {
    super(props);
  }

  render() {

    let self = this;
    let props = this.props;
    let allSeries = props.allSeries;
    let yScale = props.yScale;
    let xScale = d3.scale.ordinal()
      .domain(d3.range(props.data.length))
      .rangeRoundBands([0, props.size.width], 0.05);
    let otherSeries = allSeries.filter(function(component) {
      return component.label !== props.label;
    });
    let bars = props.data.map(function(point, i) {

      let yOffset = 0;

      otherSeries.map(function(series) {
        yOffset = yOffset + series.data[i];
      });

    //   <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
      return (
        <StackedBar height={yScale(point)} width={xScale.rangeBand()} x={xScale(i)} y={props.size.height - yScale(yOffset) - yScale(point)} color={props.color} key={i} />
      )
    });
    return (<g>{bars}</g>);
  }
}
