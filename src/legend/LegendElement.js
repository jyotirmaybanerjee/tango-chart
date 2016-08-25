import React, {PropTypes} from 'react';

export default class LegendElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var position =  "translate(" + this.props.xpos + "," + this.props.ypos + ")";
    return (
      <g transform={position}>
        <rect width="18" height="18" fill={this.props.color[this.props.ikey]}></rect>
        <text x="24" y="9" dy=".35em">{this.props.data}</text>
      </g>
    );
  }
}

LegendElement.propTypes = {
};
