import React, {PropTypes, Component} from 'react';

export default class StackedBar extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
  }

  static defaultProps = {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <rect fill={this.props.color}
        width={this.props.width} height={this.props.height}
        x={this.props.x} y={this.props.y} />
    );
  }
}
