import React from 'react';
import { Route } from 'react-router-dom';
import './Dialogs.css';
import Senders from '../Senders/Senders';
import Messages from '../Messages/Messages';
import MessagesIntro from '../MessagesIntro/MessagesIntro';

const Dialogs = () => {

  const SendersData = [
    {
      id: 1,
      name: 'Mikhail Kovalyov',
      avatar: '../../img/avatar-2.jpg',
    },
    {
      id: 2,
      name: 'Lenochka Morozova',
      avatar: '../../img/avatar-3.jpg',
    },
    {
      id: 3,
      name: 'Dmitry Marusov',
      avatar: '../../img/avatar-4.jpg',
    },
  ];

  return (

    <div className="Main__messages-wrapper">
      <Senders />

      <section className="Messages">

        <Route exact path="/dialogs" component={ MessagesIntro } />

        <Route path="/dialogs/id1" component={ Messages } />
        <Route path="/dialogs/id2" />
        <Route path="/dialogs/id3" />

      </section>

    </div>

  );
}

export default Dialogs;
