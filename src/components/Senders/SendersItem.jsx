import React from 'react';
import './SendersItem.css';

const SendersItem = (props) => {

  return (

    <li className="Senders__item">

      <img className="Senders__image" src={ props.src } width="46" height="46" alt={ props.user }/>

      <div className="Senders__item-wrapper">
        <h3 className="Senders__item-user">{ props.user }</h3>
      </div>

    </li>

  );
}

export default SendersItem;
