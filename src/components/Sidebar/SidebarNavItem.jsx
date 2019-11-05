import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNavItem.css';

const SidebarNavItem = (props) => {
  const { cat, exact, link } = props;

  return (

    <li className="Sidebar__item">
      <NavLink exact={ exact } to={ link }>
        { cat }
      </NavLink>
    </li>

  );
}

export default SidebarNavItem;
