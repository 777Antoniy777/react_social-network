import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../general/Profile';
import Dialogs from '../general/Dialogs';

class Main extends React.Component {
  state = {
    userDataObj: null,
  }

  onGetUserId = (userObj) => {
    this.setState({
      userDataObj: userObj,
    });
  }

  render() {
    return (

      <main className="Main">
        <div className="site-wrapper">
          <Sidebar sidebarCategories={ this.props.sidebarCategories } />

            {/* Profile page */}
            <Route
              exact path="/"
              render={ () =>

                <Profile
                  // properties
                  postsData={ this.props.postsData }
                  { ...this.props }
                />

              }
            />

            {/* Dialogs page */}
            <Route
              path="/dialogs"
              render={ () =>

                <Dialogs
                  // properties
                  sendersData={ this.props.sendersData }
                  messagesData={ this.props.messagesData }
                  userDataObj={ this.state.userDataObj }
                  { ...this.props }

                  // handlers
                  onGetUserId={ this.onGetUserId }
                />

              }
            />

        </div>
      </main>

    );
  }
}

export default Main;
