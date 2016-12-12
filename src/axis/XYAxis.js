import React, {PropTypes} from 'react';
import Axis from './Axis';

const XYAxis = (props) => {
  const xSettings = {
    translate: `translate(0, ${props.height - props.padding})`,
    scale: props.xScale,
    orient: 'bottom'
  };

  const ySettings = {
    translate: `translate(${props.padding}, 0)`,
    scale: props.yScale,
    orient: 'left'
  };

  return (
    <g className="xy-axis">
      <Axis {...xSettings} />
      <Axis {...ySettings} />
    </g>
  );
};

XYAxis.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number
};

XYAxis.defaultProps = {
  width: 300,
  height: 350,
  padding: 5
};

export default XYAxis;
