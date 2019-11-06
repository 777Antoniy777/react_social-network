import React from 'react';
import './PostField.css';
import img from '../../img/avatar-1.png';

class PostField extends React.Component {
  state = {
    textareaValue: '',
  }

  onSetTextareaValue = (evt) => {
    const target = evt.target;

    this.setState({
      textareaValue: target.value,
    });
  }

  addNewPost = (evt) => {
    evt.preventDefault();
    const { onSetNewPost } = this.props;

    onSetNewPost();
  }

  render() {
    return (

      <section className="PostField">
        <h2 className="visually-hidden">Write the post</h2>

        <a href="#s">
          <img className="PostField__image" src={ img } width="28" height="28" alt="My avatar"/>
        </a>

        <form action="#s" method="POST">

          <textarea onInput={ this.onSetTextareaValue } name="post" placeholder="What's new?"></textarea>

          {/* замени потом button */}
          <button className="PostField__button PostField__button--submit" onClick={ this.addNewPost } type="button">Post</button>

        </form>

      </section>

    );
  }
}

export default PostField;
