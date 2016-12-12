import React, {PropTypes} from 'react';

const Bar = (props) => {
  return (
    <rect
      fill={props.color}
      width={props.width}
      height={props.height}
      x={props.offset}
      y={props.availableHeight - props.height}
    />
  );
};

Bar.propTypes = {
  availableHeight: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  offset: PropTypes.number,
  width: PropTypes.number
};

export default Bar;
