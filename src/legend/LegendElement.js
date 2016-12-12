import React, {PropTypes} from 'react';

const LegendElement = (props) => {
  const position = 'translate(' + props.xpos + ',' + props.ypos + ')';
  return (
    <g transform={position}>
      <rect width="18" height="18" fill={props.color} />
      <text x="24" y="9" dy=".35em">{props.data}</text>
    </g>
  );
};

LegendElement.propTypes = {
  color: PropTypes.string,
  data: PropTypes.string.isRequired,
  xpos: PropTypes.number,
  ypos: PropTypes.number
};

export default LegendElement;
