import React from 'react';
import { connect } from "react-redux";
import './PostField.css';
import img from '../../img/avatar-1.png';

class PostField extends React.Component {
  state = {
    newPostBody: '',
  }

  onSetNewPostBody = (evt) => {
    evt.preventDefault();
    const target = evt.target;

    this.setState({
      newPostBody: target.value,
    });
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

  addNewPost = (evt, idVal, dateVal, newPostBody) => {
    evt.preventDefault();

    const { onAddPost } = this.props;

    idVal = this.setPostId();
    dateVal = this.setPostDate();
    newPostBody = this.state.newPostBody;

    onAddPost(idVal, dateVal, newPostBody);

    this.setState({
      newPostBody: '',
    });
  }

  render() {
    return (

      <section className="PostField">
        <h2 className="visually-hidden">Write the post</h2>

        <a href="#s">
          <img className="PostField__image" src={ img } width="28" height="28" alt="My avatar"/>
        </a>

        <form action="#s" method="POST">

          <textarea onChange={ this.onSetNewPostBody } value={ this.state.newPostBody } name="post" placeholder="What's new?"></textarea>

          <button onClick={ this.addNewPost } className="PostField__button PostField__button--submit" type="submit">
            Post
          </button>

        </form>

      </section>

    );
  }
}

export default connect(
  state => ({
    postsState: state.posts,
  }),
  dispatch => ({
    onAddPost: (id, date, newPostBody) => {
      const newPostData = {
        id: id,
        name: 'Anton Kuzmitsky',
        avatar: 'avatars/avatar-1.png',
        time: date,
        body: newPostBody,
      };

      if (newPostData.body !== '') {
        dispatch({
          type: 'ADD_NEW_POST',
          obj: newPostData,
        });
      }
    },
  }),
)(PostField);
