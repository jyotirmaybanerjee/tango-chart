import React, {PropTypes, Component} from 'react';

export default class Dots extends Component {

  static propTypes = {
    data: PropTypes.array,
    x: PropTypes.func,
    y: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    let _self = this;
    let data = this.props.data.splice(1);
    data.pop();
    let circles = data.map(function(d,i){
      return (
        <circle className="dot" r="7" cx={_self.props.x(d.x)} cy={_self.props.y(d.y)} fill="#7dc7f4"
          stroke="#3f5175" strokeWidth="5px" key={i}
          onMouseOver={_self.props.showToolTip} onMouseOut={_self.props.hideToolTip}
          data-key={d.x} data-value={d.y}/>
      );
    });

    return(
      <g>{circles}</g>
    );
  }
}
