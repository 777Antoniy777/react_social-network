import React from 'react';
import './Senders.css';
import DialogsItem from './SendersItem';

const Senders = () => {

  return (

    <section className="Senders">
      <h2 className="visually-hidden">Senders</h2>

      <ul className="Senders__list">

        <DialogsItem src={require("../../img/avatar-2.jpg")} user="Mikhail Kovalyov"/>
        <DialogsItem src={require("../../img/avatar-3.jpg")} user="Lenochka Morozova"/>
        <DialogsItem src={require("../../img/avatar-4.png")} user="Dmitry Marusov"/>

      </ul>

    </section>

  );
}

export default Senders;
