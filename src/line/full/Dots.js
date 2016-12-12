import React, {PropTypes} from 'react';

const Dots = (props) => {
  const data = props.data.splice(1);
  data.pop();
  const circles = data.map((d, i) => {
    return (
      <circle
        className="dot"
        r="7"
        cx={props.x(d.x)}
        cy={props.y(d.y)}
        fill="#7dc7f4"
        stroke="#3f5175"
        strokeWidth="5px"
        key={i}
        onMouseOver={props.showToolTip}
        onFocus={_.noop}
        onMouseOut={props.hideToolTip}
        onBlur={_.noop}
        data-key={d.x} data-value={d.y}
      />
    );
  });
  return <g>{circles}</g>;
};

Dots.propTypes = {
  data: PropTypes.array,
  x: PropTypes.func,
  y: PropTypes.func
};

export default Dots;
