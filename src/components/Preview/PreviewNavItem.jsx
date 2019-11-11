import React from 'react';
import { NavLink } from 'react-router-dom';
import './PreviewNavItem.css';

const PreviewNavItem = (props) => {
  const { cat, link, amount } = props;

  return (

    <li className="Preview__item">
      <NavLink to={ link }>
        { cat }
        <span>{ amount }</span>
      </NavLink>
    </li>

  );
}

export default PreviewNavItem;
