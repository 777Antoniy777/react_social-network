import React from 'react';
import './Header.css';
import logo from '../../img/svg/fb-logo.svg'

const Header = () => {

  return (

      <header className="Header">
        <div className="site-wrapper">

          <nav className="Header__nav">

            <a href="#s">
              <img className="Header__image" src={ logo } width="28" height="28" alt="Logo facebook"/>
            </a>

          </nav>

        </div>
      </header>

  );
}

export default Header;
