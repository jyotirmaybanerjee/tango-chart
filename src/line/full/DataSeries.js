import React, {PropTypes} from 'react';
import d3 from 'd3';
import Line from './Line';

const DataSeries = (props) => {
  const yScale = props.yScale;
  const xScale = props.xScale;
  const path = d3.svg.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .interpolate(props.interpolate);
  return <Line path={path(props.data)} color={props.color} />;
};

DataSeries.propTypes = {
  data: PropTypes.array,
  interpolate: PropTypes.string
};

DataSeries.defaultProps = {
  data: [],
  interpolate: 'linear'
};

export default DataSeries;
