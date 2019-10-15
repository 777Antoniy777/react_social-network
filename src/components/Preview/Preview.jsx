import React from 'react';
import './Preview.css';
import img from '../../img/avatar-1.png';
import PreviewNavItem from './PreviewNavItem';

const Preview = () => {

  return (

    <section className="Preview">

        <div className="Preview__wrapper">

          <img className="Preview__image" src={ img } width="168" height="168" alt="My avatar"/>
          <h1>Антон Кузьмицкий</h1>

        </div>

        <nav className="Preview__nav">
          <ul className="Preview__list">

            <PreviewNavItem cat="Friends" amount="55"/>
            <PreviewNavItem cat="Photos" amount="174"/>

          </ul>
        </nav>

    </section>

  );
}

export default Preview;
