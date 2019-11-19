import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../general/Profile';
import Dialogs from '../general/Dialogs';

class Main extends React.Component {
  state = {
    userDataObj: null,
    filteredSenderData: null,
    // filteredMessagesData: null,
    newPostData: {},
    newBlockMessageData: {},
    newMessageData: {},
    newPostsData: this.props.postsData,
    newMessagesData: this.props.messagesData,
  }

  // Posts
  setPostDate = () => {
    const date = new Date();
    const time = {};
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    time.day = date.getDate();
    time.month = date.getMonth();
    time.hours = date.getHours();

    if (date.getMinutes() >= 0 && date.getMinutes() <= 9) {
      time.minutes = `0${date.getMinutes()}`;
    } else {
      time.minutes = date.getMinutes();
    }

    const renamedMonth = monthArr.find((elem, index) => {
      if (index === time.month) return index;
      return false;
    })

    let res = `${time.day} ${renamedMonth} at ${time.hours}:${time.minutes}`;
    if (time.hours <= 12) {
      res = `${res} am`;
    } else {
      res = `${res} pm`;
    }

    return res;
  }

  setPostId = () => {
    const { newPostsData } = this.state;
    const lastPostId = newPostsData[newPostsData.length - 1].id + 1;

    return lastPostId;
  }

  onShowNewPostData = (idVal, dateVal, newPostMes) => {
    const date = dateVal();
    const id = idVal();

    const newPostData = {
      id: id,
      name: 'Anton Kuzmitsky',
      avatar: 'avatars/avatar-1.png',
      time: date,
      text: newPostMes,
    };

    this.setState({
      newPostData: newPostData,
    }, this.addNewPostsData);
  }

  addNewPostsData() {
    const postsArr = this.state.newPostsData;

    if (this.state.newPostData.text !== '') postsArr.push(this.state.newPostData);

    this.setState({
      newPostsData: postsArr,
    });
  }

  // Messages
  onGetSenderId = (userObj) => {
    this.setState({
      userDataObj: userObj,
    }, this.filterSenderArr );
  }

  filterSenderArr() {
    const filteredSenderArr = this.state.newMessagesData.filter((elem) => {
      return elem.senderId === this.state.userDataObj.id;
    });
    const filteredSenderData = filteredSenderArr[0].userData;

    this.setState({
      filteredSenderData: filteredSenderData,
    });
  }

  setBlockMessageId = () => {
    const { filteredSenderData } = this.state;
    let lastBlockMessageId;

    if (filteredSenderData.length === 0) {
      lastBlockMessageId = 1;
      return lastBlockMessageId;
    }

    lastBlockMessageId = filteredSenderData[filteredSenderData.length - 1].id + 1;
    return lastBlockMessageId;
  }

  onShowNewMessagesData = (idVal, mes) => {
    const id = idVal();
    let newBlockMessageData;

    if (this.state.newBlockMessageData.messages.length >= 1) {
      let testArr = this.state.newBlockMessageData.messages;
      const testId = testArr[testArr - 1].id + 1;
      testArr = testArr.push();

      newBlockMessageData = {
        id: id,
        name: 'Anton Kuzmitsky',
        avatar: '../../avatars/avatar-1.png',
        messages: testArr,
      };
    } else {
      newBlockMessageData = {
        id: id,
        name: 'Anton Kuzmitsky',
        avatar: '../../avatars/avatar-1.png',
        messages: [
          {
            id: 1,
            message: mes,
          },
        ],
      };

      // this.setState({
      //   newBlockMessageData: newBlockMessageData,
      // }, this.addNewMessage);
    }

    this.setState({
      newBlockMessageData: newBlockMessageData,
    }, this.addNewMessage);

  }

  addNewMessage() {
    const newMessagesArr = this.state.filteredSenderData;

    if (this.state.newBlockMessageData.messages[this.state.newBlockMessageData.messages.length - 1].message !== '') newMessagesArr.push(this.state.newBlockMessageData);

    this.setState({
      filteredSenderData: newMessagesArr,
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
                  newPostsData={ this.state.newPostsData }
                  previewCategories={ this.props.previewCategories }
                  profileData={ this.props.profileData }

                  // handlers
                  onShowNewPostData={ this.onShowNewPostData }
                  setPostDate={ this.setPostDate }
                  setPostId={ this.setPostId }
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

                  onShowNewMessagesData={ this.onShowNewMessagesData }
                  setBlockMessageId={ this.setBlockMessageId }
                />

              }
            />

        </div>
      </main>

    );
  }
}

export default Main;
