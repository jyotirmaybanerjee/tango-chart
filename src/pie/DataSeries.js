import React, {PropTypes, Component} from 'react';
import d3 from 'd3';

import Sector from './Sector';
import DonutSector from './DonutSector';

export default class DataSeries extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {

    let data = this.props.data;
    let width = this.props.width;
    let height = this.props.height;
    let pie = d3.layout.pie();
    let result = data.map(function(item){
      return item.count;
    });
    let names = data.map(function(item){
      return item.name;
    });
    let sum = result.reduce(function(memo, num){ return memo + num; }, 0);
    let position = 'translate(' + (width)/2 + ',' + (height)/2 + ')';
    let arcs = pie(result);
    let self = this;
    let bars = arcs.map(function(point, i) {

      if(self.props.donut) {
        return (
          <DonutSector data={point} key={i} index={i} name={names[i]} color={self.props.data[i].color} total=
            {sum} width={width} height={height} />
        )
      } else {
        return (
          <Sector data={point} key={i} index={i} name={names[i]} color={self.props.data[i].color} total=
            {sum} width={width} height={height} />
        )
      }
    });
    return (
      <g transform={position}>{bars}</g>
    );
  }
}
