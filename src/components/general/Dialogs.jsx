import React from 'react';
import { Route } from 'react-router-dom';
import Senders from '../Senders/Senders';
import Messages from '../Messages/Messages';

const Dialogs = () => {

  return (

    <div className="Main__messages-wrapper">
      <Senders />

      <Route exact path="/dialogs/id1" component={ Messages } />
      <Route exact path="/dialogs/id2" component={ Messages } />
      <Route exact path="/dialogs/id3" component={ Messages } />
      {/* <Messages /> */}
    </div>

  );
}

export default Dialogs;
