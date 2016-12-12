import React, {PropTypes} from 'react';

const Circle = (props) => {
  const circleProps = {
    cx: props.xScale(props.coords[0]),
    cy: props.yScale(props.coords[1]),
    r: 2,
    key: props.index
  };
  return <circle {...circleProps} />;
};

Circle.propTypes = {
  coords: PropTypes.array,
  index: PropTypes.number,
  xScale: PropTypes.func,
  yScale: PropTypes.func
};

export default Circle;
