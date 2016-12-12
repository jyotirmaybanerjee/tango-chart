import React, {PropTypes} from 'react';

const Chart = (props) => {
  return (
    <svg width={props.width} height={props.height}>
      {
        props.title &&
        <text textAnchor="middle" x="150" y="15">{props.title}</text>
      }
      {props.children}
    </svg>
  );
};

Chart.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
  title: PropTypes.string,
  width: PropTypes.number.isRequired,
};

export default Chart;
