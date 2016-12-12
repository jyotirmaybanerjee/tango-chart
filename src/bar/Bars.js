import React, {PropTypes} from 'react';
import d3 from 'd3';
import Bar from './Bar';

const Bars = (props) => {
  const dataArray = props.data.map(item => item.value);

  const yScale = d3.scale.linear()
    .domain([0, d3.max(dataArray)])
    .range([0, props.height]);

  const xScale = d3.scale.ordinal()
    .domain(d3.range(props.data.length))
    .rangeRoundBands([0, props.width], 0.05);

  const bars = props.data.map((point, i) => {
    return (
      <Bar
        height={yScale(point.value)}
        width={xScale.rangeBand()}
        offset={xScale(i)}
        availableHeight={props.height}
        color={props.color || point.color}
        key={i}
      />
    );
  });

  return (
    <g>{bars}</g>
  );
};

Bars.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  padding: PropTypes.number,
  width: PropTypes.number
};

Bars.defaultProps = {
  height: 0,
  padding: 0,
  width: 0
};

export default Bars;
