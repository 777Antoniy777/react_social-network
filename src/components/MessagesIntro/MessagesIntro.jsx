import React from 'react';
import './MessagesIntro.css';

const MessagesIntro = () => {

  return (

    <div className="Messages__intro">
      <h2 className="visually-hidden">Intro messages</h2>

      <p className="Messages__intro-description">Please select a dialog or
        <a href="#s"> create a new one</a>
      </p>

    </div>

  );
}

export default MessagesIntro;
