import React from 'react';
import { Route } from 'react-router-dom';
import Senders from '../Senders/Senders';
import Messages from '../Messages/Messages';
import MessagesIntro from '../MessagesIntro/MessagesIntro';

const Dialogs = () => {

  return (

    <div className="Main__messages-wrapper">
      <Senders />

      <Route exact path="/dialogs" component={ MessagesIntro } />

      <Route path="/dialogs/id1" component={ Messages } />
      <Route path="/dialogs/id2" />
      <Route path="/dialogs/id3" />

    </div>

  );
}

export default Dialogs;
