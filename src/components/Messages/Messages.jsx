import React from 'react';
import './Messages.css';
import MessagesItem from './MessagesItem';

const Messages = () => {

  const MessagesData = [
    {
      id: 1,
      name: 'Mikhail Kovalyov',
      avatar: '../../img/avatar-2.jpg',
      messages: [
        {
          id: 1,
          test: 'Hi!',
        },
        {
          id: 2,
          test: 'How are you',
        },
      ],
    },
    {
      id: 2,
      name: 'Anton Kuzmitsky',
      avatar: '../../img/avatar-1.jpg',
      messages: [
        {
          id: 1,
          test: 'Hi!',
        },
        {
          id: 2,
          test: 'fine. you?',
        },
      ],
    },
    {
      id: 3,
      name: 'Mikhail Kovalyov',
      avatar: '../../img/avatar-2.jpg',
      messages: [
        {
          id: 1,
          test: 'me too',
        },
        {
          id: 2,
          test: 'go to walk',
        },
      ],
    },
  ];

  return (

    <React.Fragment>
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

    </React.Fragment>

  );
}

export default Messages;
