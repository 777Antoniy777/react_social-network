import React from 'react';
import './PreviewNavItem.css';

class PreviewNavItem extends React.Component {
  render() {
    return (

      <li className="Preview__item">
        <a href="#s">
          { this.props.cat }
          <span>{ this.props.amount }</span>
        </a>
      </li>

    );
  }
}

export default PreviewNavItem;
