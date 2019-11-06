import React from 'react';
import './Sidebar.css';
import SidebarNavItem from './SidebarNavItem';

const Sidebar = (props) => {
  const { sidebarCategories } = props;

  return (

    <aside className="Sidebar">
      <nav className="Sidebar__nav">
        <h2 className="visually-hidden">Main-navigation</h2>

        <ul className="Sidebar__list">

          { sidebarCategories &&
            sidebarCategories.map((elem) =>

              <SidebarNavItem
                key={ elem.id }
                exact={ elem.exact } link={ elem.link }
                cat={ elem.name }
              />

            )
          }

        </ul>

      </nav>
    </aside>

  );
}

export default Sidebar;
