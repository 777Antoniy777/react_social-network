import React from 'react';
import './MessagesItem.css';

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
          <li className="Messages__item-list">{ props.mes1 }</li>
          <li className="Messages__item-list">{ props.mes2 }</li>
        </ul>

      </div>

    </div>

  );
}

export default MessagesItem;
