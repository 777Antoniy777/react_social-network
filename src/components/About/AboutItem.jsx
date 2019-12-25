import React from 'react';
import './AboutItem.css';

const AboutItem = (props) => {
  const { cat, body } = props;

  return (

    <div className="About__wrapper">
      <span>{ cat }</span>

      <a href="#s">
        { body }
      </a>
    </div>

  );
}

export default AboutItem;
