import React from 'react';
import './MessagesItem.css';

const Message = (props) => {
  const { message } = props;

  return (

    <li className="Messages__item-list">{ message }</li>

  )
}

const MessagesItem = (props) => {
  const { src, messages } = props;
  const name = props.name.split(' ')[0];

  return (

    <div className="Messages__item">

      <a href="#s">
        <img className="Messages__item-image" src={ src } width="36" height="36" alt={ name }/>
      </a>

      <div className="Messages__item-wrapper">
        <a href="#s">{ name }</a>

        <ul className="Messages__item-list">

          { messages &&
            messages.map((elem) =>

              <Message
                key={ elem.id }
                message={ elem.message }
              />

            )
          }

        </ul>

      </div>

    </div>

  );
}

export default MessagesItem;
