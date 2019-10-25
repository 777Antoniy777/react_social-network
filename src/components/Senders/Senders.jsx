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
          link="dialogs/id1"
        />
        <SendersItem
          src={require("../../img/avatar-3.jpg")}
          user="Lenochka Morozova"
          link="dialogs/id2"
        />
        <SendersItem
          src={require("../../img/avatar-4.png")}
          user="Dmitry Marusov"
          link="dialogs/id3"
        />

      </ul>

    </section>

  );
}

export default Senders;
