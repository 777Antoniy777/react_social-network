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
    newPostData: {
      id: null,
      name: 'Anton Kuzmitsky',
      avatar: 'avatars/avatar-1.png',
      time: '2 Mar at 10:26 am',
      text: '',
    },
    newPostMes: '',
    newPostsData: this.props.postsData,
  }

  setPostDate = () => {
    const date = new Date();
    const time = {};
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    time.day = date.getDate();
    time.month = date.getMonth();
    time.hours = date.getHours();
    time.minutes = date.getMinutes();

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

  setPostValue = (evt) => {
    const target = evt.target;
    return target.value;
  }

  onSetNewPostValue = (mesVal, evt) => {
    const mes = mesVal(evt);

    this.setState({
      newPostMes: mes,
    });
  }

  onShowNewPostData = (idVal, dateVal) => {
    const date = dateVal();
    const id = idVal();

    const newPostData = {
      id: id,
      name: 'Anton Kuzmitsky',
      avatar: 'avatars/avatar-1.png',
      time: date,
      text: this.state.newPostMes,
    };

    this.setState({
      newPostData: newPostData,
    }, this.addNewPostsData);
  }

  addNewPostsData() {
    let postsArr = this.state.newPostsData;

    if (this.state.newPostData.text !== '') postsArr.push(this.state.newPostData);

    this.setState({
      newPostsData: postsArr,
    });
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
                  newPostsData={ this.state.newPostsData }
                  previewCategories={ this.props.previewCategories }
                  profileData={ this.props.profileData }
                  newPostMes={ this.state.newPostMes }
                  { ...this.props }

                  // handlers
                  onSetNewPostValue={ this.onSetNewPostValue }
                  onShowNewPostData={ this.onShowNewPostData }
                  setPostDate={ this.setPostDate }
                  setPostId={ this.setPostId }
                  setPostValue={ this.setPostValue }
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
