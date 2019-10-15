import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../general/Profile';
import Dialogs from '../general/Dialogs';

const Main = () => {

  return (

    <main className="Main">
      <div className="site-wrapper">
        <Sidebar />

        {/* <BrowserRouter> */}

          {/* Profile page */}
          <Route exact path="/" component={Profile} />

          {/* Dialogs page */}
          <Route path="/dialogs" component={Dialogs} />

        {/* </BrowserRouter> */}

      </div>
    </main>

  );
}

export default Main;
