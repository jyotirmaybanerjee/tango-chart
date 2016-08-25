import React, {PropTypes, Component} from 'react';
import LegendElement from './LegendElement';

export default class Legend extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let color = this.props.colors;
    let data = this.props.data;
    let elements = data.map(function(item, i){
      return (
        <LegendElement color={color} xpos="0" ypos={100+i*20} data={item.name} key={i} ikey={i}/>
      )
    });

    return(
      <svg className="legend" width={this.props.width} height={this.props.height}>{elements}</svg>
    );
  }
}

Legend.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colors: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};
