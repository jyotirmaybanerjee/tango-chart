import React, {PropTypes, Component} from 'react';

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 2,
      key: index
    };
    return <circle {...circleProps} />;
  };
};

export default class DataCircles extends Component {

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



  render() {
    return <g>{ this.props.data.map(renderCircles(this.props)) }</g>
  }
}
