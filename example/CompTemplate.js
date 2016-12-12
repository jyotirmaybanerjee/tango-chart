import React, {PropTypes} from 'react';

const CompTemplate = (props) => {
  const codeBlock = props.code ?
  (
    <div className="code">
      <pre>
        {props.code}
      </pre>
    </div>
  ) : <span />;

  return (

    <div className="panel panel-default" style={{marginBottom: '36px'}}>
      <div className="panel-heading">
        <h3 className="panel-title">{props.label}</h3>
      </div>
      <div className="panel-body">
        {props.children}
        <div className="sample-code">
          {codeBlock}
        </div>
      </div>
    </div>
  );
};

export default CompTemplate;
