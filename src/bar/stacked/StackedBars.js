import d3 from 'd3';
import React, {PropTypes} from 'react';
import StackedBar from './StackedBar';

const StackedBars = (props) => {
  const allSeries = props.allSeries;
  const yScale = props.yScale;
  const xScale = d3.scale.ordinal()
    .domain(d3.range(props.data.length))
    .rangeRoundBands([0, props.size.width], 0.05);

  const otherSeries = allSeries.filter(component => (component.label !== props.label));

  const bars = props.data.map((point, i) => {
    let yOffset = 0;
    yOffset += otherSeries.map(series => (series.data[i]));
    return (
      <StackedBar
        height={yScale(point)}
        width={xScale.rangeBand()}
        x={xScale(i)}
        y={props.size.height - yScale(yOffset) - yScale(point)}
        color={props.color}
        key={i}
      />
    );
  });

  return (<g>{bars}</g>);
};

StackedBars.propTypes = {
  allSeries: PropTypes.array,
  color: PropTypes.string,
  data: PropTypes.array.isRequired,
  size: PropTypes.number,
  yScale: PropTypes.number,
  title: PropTypes.string
};

StackedBars.defaultProps = {
  data: [],
  title: ''
};

export default StackedBars;
