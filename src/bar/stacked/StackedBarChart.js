import React, {PropTypes} from 'react';
import d3 from 'd3';
import StackedBars from './StackedBars';
import Chart from '../../Chart';

const StackedBarChart = (props) => {
  const size = {width: props.width, height: props.height};
  const totals = [];
  const stackedSerieses = [];

  props.data.forEach((element) => {
    element.data.forEach((subElement, index) => {
      totals[index] = totals[index] ? totals[index] + subElement : subElement;
    });
  });

  const yScale = d3.scale.linear()
    .domain([0, d3.max(totals)])
    .range([0, props.height]);

  props.data.forEach((element) => {
    stackedSerieses.push(
      <StackedBars
        key={element.label}
        data={element.data}
        label={element.label}
        color={element.color}
        size={size}
        yScale={yScale}
        allSeries={props.data}
      />
    );
  });

  return (
    <Chart width={props.width} height={props.height}>
      {stackedSerieses}
    </Chart>
  );
};

StackedBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
};

StackedBarChart.defaultProps = {
  height: 300,
  width: 600
};

export default StackedBarChart;
