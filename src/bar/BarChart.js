import React, {PropTypes} from 'react';
import Chart from '../Chart';
import Bars from './Bars';
// import XYAxis from '../axis/XYAxis';

const BarChart = (props) => {
  return (
    <Chart {...props}>
      <Bars {...props} />
    </Chart>
  );
};

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  padding: PropTypes.number,
  title: PropTypes.string,
  width: PropTypes.number
};

BarChart.defaultProps = {
  height: 350,
  padding: 30,
  width: 300
};

export default BarChart;
