import React, {PropTypes, Component} from 'react';
import d3 from 'd3';

export default class Axis extends Component {
  static propTypes = {
    orient: PropTypes.string,
    scale: PropTypes.func,
    translate: PropTypes.string
  };

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const node = this.refs.axis;
    const axis = d3.svg.axis().orient(this.props.orient).ticks(5).scale(this.props.scale);
    d3.select(node).call(axis);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate} />;
  }
}
