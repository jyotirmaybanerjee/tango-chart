import React, {PropTypes} from 'react';
import LegendElement from './LegendElement';

const Legend = (props) => {
  const elements = props.data.map((item, i) => {
    return (
      <LegendElement
        xpos="0"
        ypos={100 + i * 20}
        color={item.color}
        data={item.label}
        key={i}
      />
    );
  });

  return (
    <svg
      className="legend"
      width={props.width}
      height={props.height}
    >
      {elements}
    </svg>
  );
};

Legend.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
};

export default Legend;
