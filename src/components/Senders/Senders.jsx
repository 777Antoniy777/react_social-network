import React from 'react';
import './Senders.css';
import SendersItem from './SendersItem';

const Senders = () => {

  return (

    <section className="Senders">
      <h2 className="visually-hidden">Senders</h2>

      <ul className="Senders__list">

        <SendersItem
          src={require("../../img/avatar-2.jpg")}
          user="Mikhail Kovalyov"
          id="1"
        />
        <SendersItem
          src={require("../../img/avatar-3.jpg")}
          user="Lenochka Morozova"
          id="2"
        />
        <SendersItem
          src={require("../../img/avatar-4.png")}
          user="Dmitry Marusov"
          id="3"
        />

      </ul>

    </section>

  );
}

export default Senders;
