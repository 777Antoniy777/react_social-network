import React from 'react';
import './Messages.css';
import MessagesItem from './MessagesItem';
import MessagesEmpty from '../MessagesEmpty/MessagesEmpty';

const Messages = (props) => {
  const { userDataObj, filteredSenderData } = props;

  return (

    <React.Fragment>
      <h2 className="visually-hidden">Messages</h2>

      <div className="Messages__header">
        <a href="#s">
          <h3>{ userDataObj.user }</h3>
        </a>

        <a href="#s">
          <img src={ userDataObj.src } width="30px" height="30px" alt={ userDataObj.user } />
        </a>

      </div>

      <div className="Messages__content">

        { !filteredSenderData &&
          <MessagesEmpty />
        }

        { filteredSenderData &&
          filteredSenderData.map((elem) =>

            <MessagesItem
              // properties
              key={ elem.id }
              id={ elem.id }
              src={ elem.avatar }
              name={ elem.name }
              messages={ elem.messages }
            />

          )
        }

      </div>

    </React.Fragment>

  );
}

export default Messages;
