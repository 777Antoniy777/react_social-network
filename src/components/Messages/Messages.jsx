import React from 'react';
import './Messages.css';
import MessagesItem from './MessagesItem';

const Messages = () => {

  return (

    <section className="Messages">
      <h2 className="visually-hidden">Messages</h2>

      <div className="Messages__header">
        <a href="#s">
          <h3>Mikhail Kovalyov</h3>
        </a>

        <a href="#s">
          <img src={require("../../img/avatar-2.jpg")} width="30px" height="30px" alt="Mikhail Kovalyov"/>
        </a>

      </div>

      <div className="Messages__content">

        <MessagesItem
          src={require("../../img/avatar-2.jpg")}
          name="Mikhail Kovalyov"
          mes1="Hi!"
          mes2="How are you"
        />
        <MessagesItem
          src={require("../../img/avatar-1.png")}
          name="Anton Kuzmitsky"
          mes1="Hi!"
          mes2="fine. you?"
        />
        <MessagesItem
          src={require("../../img/avatar-2.jpg")}
          name="Mikhail Kovalyov"
          mes1="me too"
          mes2="go to walk"
        />

      </div>

    </section>

  );
}

export default Messages;
