import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../general/Profile';
import Dialogs from '../general/Dialogs';

const Main = (props) => {

  return (

    <main className="Main">
      <div className="site-wrapper">
        <Sidebar />

          {/* Profile page */}
          <Route exact path="/" component={ Profile } postsData={ props.postsData } />
          {/* <Profile postsData={ props.postsData } /> */}

          {/* Dialogs page */}
          <Route path="/dialogs" component={ Dialogs } />

      </div>
    </main>

  );
}

export default Main;
