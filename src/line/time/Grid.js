import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

export default class Grid extends Component {

  static propTypes = {
    h: PropTypes.number,
    grid: PropTypes.func,
    gridType: PropTypes.oneOf(['x', 'y'])
  }

  componentDidMount() {
    this.renderGrid();
  }

  componentDidUpdate() {
    this.renderGrid();
  }

  renderGrid() {
    const node = ReactDOM.findDOMNode(this);
    d3.select(node).call(this.props.grid);
  }

  render() {
    const translate = 'translate(0,' + (this.props.h) + ')';
    return (
      <g className="y-grid" transform={this.props.gridType === 'x' ? translate : ''} />
    );
  }
}
