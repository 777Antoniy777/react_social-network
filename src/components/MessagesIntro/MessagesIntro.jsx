import React from 'react';
import './MessagesIntro.css';

const MessagesIntro = () => {

  return (

    <section className="MessagesIntro">
      <h2 className="visually-hidden">Intro messages</h2>

      <p className="MessagesIntro__description">Please select a dialog or
        <a href="#s"> create a new one</a>
      </p>

    </section>

  );
}

export default MessagesIntro;
