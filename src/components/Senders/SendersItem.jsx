import React from 'react';
import { NavLink } from 'react-router-dom';
import './SendersItem.css';

const SendersItem = (props) => {

  return (

    <li className="Senders__item">
      <NavLink to={ `/dialogs/id${props.id}` }>

        <img className="Senders__image" src={ props.src } width="46" height="46" alt={ props.user }/>

        <div className="Senders__item-wrapper">
          <h3 className="Senders__item-user">{ props.user }</h3>
        </div>

      </NavLink>
    </li>

  );
}

export default SendersItem;
