import React from 'react';
import Senders from '../Senders/Senders';
import Messages from '../Messages/Messages';

const Dialogs = () => {

  return (

    <div className="Main__messages-wrapper">
      <Senders />
      <Messages />
    </div>

  );
}

export default Dialogs;
