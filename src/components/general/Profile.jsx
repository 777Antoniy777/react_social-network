import React from 'react';
import { connect } from "react-redux";
import Preview from '../Preview/Preview';
import About from '../About/About';
import PostField from '../PostField/PostField';
import Posts from '../Posts/Posts';

class Profile extends React.Component {
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
      if (index === time.month) return true;
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
    const { postsState } = this.props;
    const lastPostId = postsState[postsState.length - 1].id + 1;

    return lastPostId;
  }

  addNewPostsData = (idVal, dateVal, newPostMes) => {
    const { onAddPost } = this.props;
    const date = dateVal();
    const id = idVal();

    const newPostData = {
      id: id,
      name: 'Anton Kuzmitsky',
      avatar: 'avatars/avatar-1.png',
      time: date,
      text: newPostMes,
    };

    if (newPostData.text !== '') {
      onAddPost(newPostData);

      return;
    }
  }

  render() {
    return (

      <div className="Main__profile-wrapper">
        <Preview previewCategories={ this.props.previewCategories } />

        <div className="Main__about-wrapper">
          <About profileData={ this.props.profileData } />

          <div className="Main__comment-wrapper">

            <PostField
              // handlers
              addNewPostsData={ this.addNewPostsData }
              setPostDate={ this.setPostDate }
              setPostId={ this.setPostId }
            />

            <Posts state={ this.props.state } />
          </div>

        </div>
      </div>

    );
  }
}

export default connect(
  state => ({
    postsState: state.posts,
  }),
  dispatch => ({
    onAddPost: (newPostData) => {
      dispatch({
        type: 'ADD_NEW_POSTS_DATA',
        obj: newPostData,
      });
    },
  }),
)(Profile);
