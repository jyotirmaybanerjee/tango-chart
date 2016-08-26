import React, {PropTypes} from 'react';
import Chart from '../Chart';

export default class Line extends React.Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    data: PropTypes.array.isRequired
  }

  static defaultProps = {
    width: 300,
    height: 350,
    title: '',
    Legend: true
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>MyComponent</div>);
  }
}

Line.propTypes = {
};
