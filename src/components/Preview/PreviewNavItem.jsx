import React from 'react';
import './PreviewNavItem.css';

const PreviewNavItem = (props) => {

  return (

    <li className="Preview__item">
      <a href="#s">
        { props.cat }
        <span>{ props.amount }</span>
      </a>
    </li>

  );
}

export default PreviewNavItem;
