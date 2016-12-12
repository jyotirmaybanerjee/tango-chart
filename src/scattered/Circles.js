import React, {PropTypes} from 'react';
import Circle from './Circle';

const Circles = (props) => {
  const circles = props.data.map((coords, index) => {
    return (
      <Circle
        coords={coords}
        key={index}
        index={index}
        xScale={props.xScale}
        yScale={props.yScale}
      />
    );
  });
  return <g>{circles}</g>;
};

Circles.propTypes = {
  data: PropTypes.array.isRequired,
  xScale: PropTypes.number,
  yScale: PropTypes.number
};

export default Circles;
