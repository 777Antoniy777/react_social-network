import React from 'react';
import './SidebarNavItem.css';

class SidebarNavItem extends React.Component {

  render() {
    return (

      <li className="Sidebar__item">
        <a href="#s">
          { this.props.cat }
        </a>
      </li>

    );
  }
}

export default SidebarNavItem;
