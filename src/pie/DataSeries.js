import React, {PropTypes} from 'react';
import d3 from 'd3';
import Sector from './Sector';
import DonutSector from './DonutSector';

const DataSeries = (props) => {
  const pie = d3.layout.pie();
  const result = props.data.map(item => item.value);
  const names = props.data.map(item => item.label);
  const sum = result.reduce((memo, num) => (memo + num), 0);
  const position = 'translate(' + props.width / 2 + ',' + props.height / 2 + ')';
  const arcs = pie(result);
  const bars = arcs.map((point, i) => {
    return (props.donut ?
      <DonutSector
        data={point}
        key={i}
        index={i}
        name={names[i]}
        color={props.data[i].color}
        total={sum}
        width={props.width}
        height={props.height}
      /> :
      <Sector
        data={point}
        key={i}
        index={i}
        name={names[i]}
        color={props.data[i].color}
        total={sum}
        width={props.width}
        height={props.height}
      />
    )
  });
  return <g transform={position}>{bars}</g>;
};

DataSeries.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
};

export default DataSeries;
