import React from 'react';
import './PostField.css';
import img from '../../img/avatar-1.png';

class PostField extends React.Component {
  state = {
    newPostMes: '',
  }

  onSetNewPostValue = (evt) => {
    evt.preventDefault();
    const target = evt.target;

    this.setState({
      newPostMes: target.value,
    });
  }

  showNewPostsData = (evt) => {
    evt.preventDefault();
    const { onShowNewPostData, setPostId, setPostDate } = this.props;

    onShowNewPostData(setPostId, setPostDate, this.state.newPostMes);

    this.setState({
      newPostMes: '',
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

          <textarea onChange={ this.onSetNewPostValue } value={ this.state.newPostMes } name="post" placeholder="What's new?"></textarea>

          <button onClick={ this.showNewPostsData } className="PostField__button PostField__button--submit" type="submit">
            Post
          </button>

        </form>

      </section>

    );
  }
}

export default PostField;
