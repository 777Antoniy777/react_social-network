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
    newPostData: {},
    newBlockMessageData: {},

    newMessageDataArr: [],
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

  setBlockMessageId = (messageArr) => {
    let lastMessageId;

    if (messageArr.length === 0) {
      lastMessageId = 1;
      return lastMessageId;
    }

    lastMessageId = messageArr[messageArr.length - 1].id + 1;
    return lastMessageId;
  }

  onShowNewMessageData = (mes) => {
    const filteredSenderData = this.state.filteredSenderData;
    const filteredMessagesData = filteredSenderData[filteredSenderData.length - 1].messages;

    let mesId;

    if (filteredSenderData[filteredSenderData.length - 1].name !== 'Anton Kuzmitsky') {
      mesId =  0;
    } else {
      mesId = filteredMessagesData[filteredMessagesData.length - 1].id;
    }

    const newMessageData = {
      id: ++mesId,
      message: mes,
    };

    this.setState({
      newMessageData: newMessageData,
    }, this.addNewMessageData);

  }

  // TEST
  addNewMessageData() {
    const { newMessageData, newMessageDataArr, filteredSenderData } = this.state;

    if (filteredSenderData[filteredSenderData.length - 1].name === 'Anton Kuzmitsky' && newMessageData.message !== '') {
      newMessageDataArr.push(newMessageData);
    }

    // if (newMessageData.message !== '') {
    //   newMessageDataArr.push(newMessageData);
    // }

    this.setState({
      newMessageDataArr: newMessageDataArr,
    });
  }
  //

  onShowNewMessagesData = (idVal, mes) => {
    const filteredSenderData = this.state.filteredSenderData;
    const id = idVal(filteredSenderData);

    const newBlockMessageData = {
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

    this.setState({
      newBlockMessageData: newBlockMessageData,
    }, this.addNewMessagesData);

  }

  addNewMessagesData() {
    const { filteredSenderData, newBlockMessageData, newMessageData } = this.state;

    if (newMessageData.message !== '') {

      if (filteredSenderData[filteredSenderData.length - 1].name !== 'Anton Kuzmitsky') {
        filteredSenderData.push(newBlockMessageData);
      } else {
        filteredSenderData[filteredSenderData.length - 1].messages.push(newMessageData);
      }

    }

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
                  onShowNewMessageData={ this.onShowNewMessageData }
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
