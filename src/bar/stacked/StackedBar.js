import React, {PropTypes} from 'react';

const StackedBar = (props) => {
  return (
    <rect
      fill={props.color}
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
    />
  );
};

StackedBar.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};

StackedBar.defaultProps = {
  height: 0,
  width: 0,
  x: 0,
  y: 0
};

export default StackedBar;
