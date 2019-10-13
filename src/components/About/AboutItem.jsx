import React from 'react';
import './AboutItem.css';

class AboutItem extends React.Component {

  render() {
    return (

      <div className="About__wrapper">
        <span>{ this.props.cat }</span>

        <a href="#s">
          { this.props.val }
        </a>
      </div>

    );
  }
}

export default AboutItem;
