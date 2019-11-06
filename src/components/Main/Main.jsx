import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../general/Profile';
import Dialogs from '../general/Dialogs';

class Main extends React.Component {
  state = {
    userDataObj: null,
    filteredSenderData: null
  }

  onGetSenderId = (userObj) => {
    this.setState({
      userDataObj: userObj,
    }, this.filterSenderArr );
  }

  filterSenderArr() {
    const filteredSenderArr = this.props.messagesData.filter((elem) => {
      return elem.senderId === this.state.userDataObj.id;
    });
    const filteredSenderData = filteredSenderArr[0].userData;

    this.setState({
      filteredSenderData: filteredSenderData,
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

                  // handlers
                  onSetNewPost={ this.props.onSetNewPost }
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
                  filteredSenderData={ this.state.filteredSenderData }
                  userDataObj={ this.state.userDataObj }
                  { ...this.props }

                  // handlers
                  onGetSenderId={ this.onGetSenderId }
                />

              }
            />

        </div>
      </main>

    );
  }
}

export default Main;
