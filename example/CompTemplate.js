import React, { Component, PropTypes } from 'react';

export default class CompTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var codeBlock = <span />;
    if (this.props.code) {
      codeBlock = (
        <div className="code">
          <pre>
            {this.props.code}
          </pre>
        </div>
      );
    }

    return (

      <div className="panel panel-default" style={{marginBottom: '36px'}}>
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.label}</h3>
        </div>
        <div className="panel-body">
          {this.props.children}
          <div className="sample-code">
            {codeBlock}
          </div>
        </div>
      </div>
    );
  }
}
