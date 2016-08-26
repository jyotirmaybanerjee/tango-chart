import React, { PropTypes, Component } from 'react';

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <text textAnchor="middle" x="150" y="15">{this.props.title}</text>
        {this.props.children}
      </svg>
    );
  }
}

Chart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node
};
