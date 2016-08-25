import React, {PropTypes, Component} from 'react';
import {pie} from 'd3-shape';

import Sector from './Sector';
import DonutSector from './DonutSector';

export default class DataSeries extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let color = this.props.colors;
    let data = this.props.data;
    let width = this.props.width;
    let height = this.props.height;
    let pieLayout = pie();
    let result = data.map(function(item){
      return item.count;
    });
    let names = data.map(function(item){
      return item.name;
    });
    let sum = result.reduce(function(memo, num){ return memo + num; }, 0);
    let position = 'translate(' + (width)/2 + ',' + (height)/2 + ')';
    let arcs = pieLayout(result);
    let self = this;
    let bars = arcs.map(function(point, i) {

      if(self.props.donut) {
        return (
          <DonutSector data={point} key={i} index={i} name={names[i]} colors={color} total=
            {sum} width={width} height={height} />
        )
      } else {
        return (
          <Sector data={point} key={i} index={i} name={names[i]} colors={color} total=
            {sum} width={width} height={height} />
        )
      }
    });
    return (
      <g transform={position}>{bars}</g>
    );
  }
}

DataSeries.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.array,
  data: PropTypes.array.isRequired
};
