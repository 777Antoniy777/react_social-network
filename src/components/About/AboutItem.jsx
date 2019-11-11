import React from 'react';
import './AboutItem.css';

const AboutItem = (props) => {
  const { cat, text } = props;

  return (

    <div className="About__wrapper">
      <span>{ cat }</span>

      <a href="#s">
        { text }
      </a>
    </div>

  );
}

export default AboutItem;
