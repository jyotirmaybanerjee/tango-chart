import React, {PropTypes} from 'react';
import Chart from '../Chart';
import Legend from '../legend/Legend';
import DataSeries from './DataSeries';

const Donut = (props) => {
  const legend = props.legend ?
    (
      <Legend
        data={props.data}
        width={props.width - 100}
        height={props.height}
      />
    ) : <span />;

  const colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497'];
  return (
    <div>
      <Chart
        width={props.width}
        height={props.height}
        title={props.title}
      >
        <DataSeries
          data={props.data}
          colors={colors}
          width={props.width}
          height={props.height}
          donut={true}
        />
      </Chart>
      {legend}
    </div>
  );
};

Donut.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  legend: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array.isRequired
};

Donut.defaultProps = {
  width: 300,
  height: 350,
  title: ''
};

export default Donut;
