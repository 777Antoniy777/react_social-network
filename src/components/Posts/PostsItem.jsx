import React from 'react';
import './PostsItem.css';
import img from '../../img/avatar-1.png';

const PostsItem = (props) => {

  return (

    <li className="Posts__item">

      <div className="Posts__image-wrapper">
        <a href="#s">
          <img className="Posts__image" src={ img } width="40" height="40" alt="My avatar"/>
        </a>

        <div className="Posts__name-wrapper">

          <a href="#s">
            <p>{ props.name }</p>
          </a>

          <a href="#s">
            <span>{ props.time }</span>
          </a>


        </div>
      </div>

      <p className="Posts__description">{ props.message }</p>

    </li>

  );
}

export default PostsItem;
