import React from 'react';
import './MessagesEmpty.css';

const MessagesEmpty = () => {

  return (

    <div className="Messages__empty">
      <h2 className="visually-hidden">Empty messages</h2>

      <p className="Messages__empty-description">We have found no messages :(</p>
    </div>

  );
}

export default MessagesEmpty;
