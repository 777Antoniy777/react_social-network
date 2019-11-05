import React from 'react';
import { Route } from 'react-router-dom';
import './Dialogs.css';
import Senders from '../Senders/Senders';
import Messages from '../Messages/Messages';
import MessagesIntro from '../MessagesIntro/MessagesIntro';

const Dialogs = (props) => {
  const { sendersData } = props;

  return (

    <div className="Main__messages-wrapper">
      <Senders
        // properties
        sendersData={ sendersData }

        // handlers
        onGetUserId={ props.onGetUserId }
      />

      <section className="Messages">

        <Route exact path="/dialogs" component={ MessagesIntro } />

        { sendersData &&
          sendersData.map((elem) =>

          <Route
            key={ elem.id }
            path={`/dialogs/id${elem.id}`}
            render={ () =>

              <Messages
                // properties
                messagesData={ props.messagesData }
                userDataObj={ props.userDataObj }
                { ...props }
              />

            }
          />

          )
        }

      </section>

    </div>

  );
}

export default Dialogs;
