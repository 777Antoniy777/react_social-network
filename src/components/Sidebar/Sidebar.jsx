import React from 'react';
import './Sidebar.css';
import SidebarNavItem from './SidebarNavItem';

const Sidebar = () => {

  return (

    <aside className="Sidebar">
      <nav className="Sidebar__nav">
        <h2 className="visually-hidden">Main-navigation</h2>

        <ul className="Sidebar__list">

          <SidebarNavItem exact link="/" cat="My profile" />
          <SidebarNavItem link="/friends" cat="Friends" />
          <SidebarNavItem link="/dialogs" cat="Messages" />
          <SidebarNavItem link="/photos" cat="Photos" />

        </ul>

      </nav>
    </aside>

  );
}

export default Sidebar;
