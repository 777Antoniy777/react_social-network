import React from 'react';
import './PostField.css';
import img from '../../img/avatar-1.png';

class PostField extends React.Component {
  addNewPostValues = (evt) => {
    evt.preventDefault();
    const { onSetNewPostValue, onSetPostValue } = this.props;

    onSetNewPostValue(onSetPostValue, evt);
  }

  showNewPostsData = (evt) => {
    evt.preventDefault();
    const { onShowNewPostData, onSetPostId, onSetPostDate } = this.props;

    onShowNewPostData(onSetPostId, onSetPostDate);
  }

  render() {
    return (

      <section className="PostField">
        <h2 className="visually-hidden">Write the post</h2>

        <a href="#s">
          <img className="PostField__image" src={ img } width="28" height="28" alt="My avatar"/>
        </a>

        <form action="#s" method="POST">

          <textarea onChange={ this.addNewPostValues } name="post" placeholder="What's new?"></textarea>

          <button onClick={ this.showNewPostsData } className="PostField__button PostField__button--submit" type="submit">
            Post
          </button>

        </form>

      </section>

    );
  }
}

export default PostField;
