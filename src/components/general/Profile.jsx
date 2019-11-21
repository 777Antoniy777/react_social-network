import React from 'react';
import Preview from '../Preview/Preview';
import About from '../About/About';
import PostField from '../PostField/PostField';
import Posts from '../Posts/Posts';

class Profile extends React.Component {
  state = {
    newPostData: {},
    newPostsData: this.props.postsData,
  }

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

  render() {
    return (

      <div className="Main__profile-wrapper">
        <Preview previewCategories={ this.props.previewCategories } />

        <div className="Main__about-wrapper">
          <About profileData={ this.props.profileData } />

          <div className="Main__comment-wrapper">

            <PostField
              // handlers
              onShowNewPostData={ this.onShowNewPostData }
              setPostDate={ this.setPostDate }
              setPostId={ this.setPostId }
            />

            <Posts newPostsData={ this.state.newPostsData } />
          </div>

        </div>
      </div>

    );
  }
}

export default Profile;
