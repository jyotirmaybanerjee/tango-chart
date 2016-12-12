import React, {PropTypes} from 'react';
import Chart from '../Chart';
import Circles from './Circles';
import XYAxis from '../axis/XYAxis';

import {xScale, yScale} from '../helpers/D3Helpers';

const ScatteredPlot = (props) => {
  const scales = {
    xScale: xScale(props.padding, props.width, props.data),
    yScale: yScale(props.padding, props.height, props.data)
  };
  return (
    <Chart width={props.width} height={props.height} title={props.title}>
      <Circles {...props} {...scales} />
      <XYAxis
        height={props.height}
        width={props.width}
        padding={props.padding}
        {...scales}
      />
    </Chart>
  );
};

ScatteredPlot.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
  title: PropTypes.string,
  data: PropTypes.array.isRequired
};

ScatteredPlot.defaultProps = {
  width: 300,
  height: 350,
  padding: 0,
  title: ''
};

export default ScatteredPlot;
