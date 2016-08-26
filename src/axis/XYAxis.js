import React, {PropTypes, Component} from 'react';
import Axis from './axis';

export default class XYAxis extends Component {

  static propTypes = {
    // width: PropTypes.number,
    // height: PropTypes.number,
    // title: PropTypes.string,
    // data: PropTypes.array.isRequired
  }

  static defaultProps = {
    // width: 300,
    // height: 350,
    // title: '',
    // Legend: true
  }

  constructor(props) {
    super(props);
  }

  render() {
    const xSettings = {
      translate: `translate(0, ${this.props.height - this.props.padding})`,
      scale: this.props.xScale,
      orient: 'bottom'
    };
    const ySettings = {
      translate: `translate(${this.props.padding}, 0)`,
      scale: this.props.yScale,
      orient: 'left'
    };

    return (
      <g className="xy-axis">
        <Axis {...xSettings}/>
        <Axis {...ySettings}/>
      </g>
    );
  }
}
