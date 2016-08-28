import React, {PropTypes, Component} from 'react';
import Circle from './Circle';

export default class DataCircles extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    let props = this.props;
    let circles = props.data.map(function(coords, index) {
      return <Circle coords={coords} key={index} index={index} xScale={props.xScale} yScale={props.yScale}/>
    });
    return <g>{circles}</g>
  }
}
