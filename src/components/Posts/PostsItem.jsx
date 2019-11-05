import React from 'react';
import './PostsItem.css';

const PostsItem = (props) => {
  const { avatar, name, time, message } = props;

  return (

    <li className="Posts__item">

      <div className="Posts__image-wrapper">
        <a href="#s">
          <img className="Posts__image" src={ avatar } width="40" height="40" alt={ name } />
        </a>

        <div className="Posts__name-wrapper">

          <a href="#s">
            <p>{ name }</p>
          </a>

          <a href="#s">
            <span>{ time }</span>
          </a>


        </div>
      </div>

      <p className="Posts__description">{ message }</p>

    </li>

  );
}

export default PostsItem;
