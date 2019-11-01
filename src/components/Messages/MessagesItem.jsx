import React from 'react';
import './MessagesItem.css';

const Message = (props) => {
  return (

    <li className="Messages__item-list">{ props.mes }</li>

  )
}

const MessagesItem = (props) => {
  let name = props.name.split(' ')[0];

  return (

    <div className="Messages__item">

      <a href="#s">
        <img className="Messages__item-image" src={ props.src } width="36" height="36" alt={ props.name }/>
      </a>

      <div className="Messages__item-wrapper">
        <a href="#s">{ name }</a>

        <ul className="Messages__item-list">
          
          <Message mes={ props.mes1 } />
          <Message mes={ props.mes2 } />

        </ul>

      </div>

    </div>

  );
}

export default MessagesItem;
