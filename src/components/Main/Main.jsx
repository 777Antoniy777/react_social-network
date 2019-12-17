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
        <Sidebar sidebarCategories={ props.sidebarCategories } />

          {/* Profile page */}
          <Route
            exact path="/"
            render={ () =>

              <Profile
                // properties
                // postsData={ props.postsData }
                previewCategories={ props.previewCategories }
                profileData={ props.profileData }

                // test
                state={ props.state }
                dispatch={ props.dispatch }
              />

            }
          />

          {/* Dialogs page */}
          <Route
            path="/dialogs"
            render={ () =>

              <Dialogs
                // properties
                sendersData={ props.sendersData }
                messagesData={ props.messagesData }
              />

            }
          />

      </div>
    </main>

  );
}

export default Main;
