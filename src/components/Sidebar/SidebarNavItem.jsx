import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNavItem.css';

const SidebarNavItem = (props) => {

  return (

    <li className="Sidebar__item">
      <NavLink exact={ props.exact } to={ props.link }>
        { props.cat }
      </NavLink>
    </li>

  );
}

export default SidebarNavItem;
