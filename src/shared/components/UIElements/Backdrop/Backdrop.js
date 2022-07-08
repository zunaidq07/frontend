import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
  // const content = <div className="backdrop" onClick={props.onClick}></div>
  // return ReactDOM.createPortal(content, document.getElementById('backdrop-hook'))
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;




