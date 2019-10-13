import React from 'react';
import './Sidebar.css';
import SidebarNavItem from './SidebarNavItem';

class Sidebar extends React.Component {

  render() {
    return (

      <aside className="Sidebar">
        <nav className="Sidebar__nav">
          <h2 className="visually-hidden">Main-navigation</h2>

          <ul className="Sidebar__list">

            <SidebarNavItem cat="My profile" />
            <SidebarNavItem cat="Friends" />
            <SidebarNavItem cat="Messages" />
            <SidebarNavItem cat="Photos" />

          </ul>

        </nav>
      </aside>

    );
  }
}

export default Sidebar;
