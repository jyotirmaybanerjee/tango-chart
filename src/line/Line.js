import React, {PropTypes, Component} from 'react';

export default class Line extends Component {

  static propTypes = {
    path: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number
  }

  static defaultProps = {
    path: '',
    color: 'blue',
    width: 2
  }

  render() {
    return (
      <path d={this.props.path} stroke={this.props.color} strokeWidth={this.props.width} fill="none" />
    );
  }
}
