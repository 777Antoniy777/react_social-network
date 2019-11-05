import React from 'react';
import { NavLink } from 'react-router-dom';
import './SendersItem.css';

const SendersItem = (props) => {
  const { id, src, user, onGetUserId } = props;

  const obj = {
    id,
    src,
    user,
  }

  function senderClickHandler() {
    onGetUserId(obj);
  }

  return (

    <li className="Senders__item" onClick={ senderClickHandler } >
      <NavLink to={ `/dialogs/id${id}` }>

        <img className="Senders__image" src={ src } width="46" height="46" alt={ user }/>

        <div className="Senders__item-wrapper">
          <h3 className="Senders__item-user">{ user }</h3>
        </div>

      </NavLink>
    </li>

  );
}

export default SendersItem;
