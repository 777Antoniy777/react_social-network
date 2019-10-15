import React from 'react';
import './AboutItem.css';

const AboutItem = (props) => {

  return (

    <div className="About__wrapper">
      <span>{ props.cat }</span>

      <a href="#s">
        { props.val }
      </a>
    </div>

  );
}

export default AboutItem;
