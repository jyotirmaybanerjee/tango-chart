import React, {PropTypes, Component} from 'react';

export default class Circle extends Component {

  render() {
    const circleProps = {
      cx: this.props.xScale(this.props.coords[0]),
      cy: this.props.yScale(this.props.coords[1]),
      r: 2,
      key: this.props.index
    };
    return <circle {...circleProps} />;
  }
}
