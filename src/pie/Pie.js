import React, {PropTypes} from 'react';
import Chart from '../Chart';
import Legend from '../legend/Legend';
import DataSeries from './DataSeries';

const Pie = (props) => {
  const legend = props.legend ?
    (
      <Legend
        data={props.data}
        width={props.width - 100}
        height={props.height}
      />
    ) : <span />;
  return (
    <div>
      <Chart
        width={props.width}
        height={props.height}
        title={props.title}
      >
        <DataSeries
          data={props.data}
          width={props.width}
          height={props.height}
        />
      </Chart>
      {legend}
    </div>
  );
};

Pie.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  legend: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array.isRequired
};

Pie.defaultProps = {
  width: 300,
  height: 350,
  title: ''
};

export default Pie;
