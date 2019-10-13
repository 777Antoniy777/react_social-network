import React from 'react';
import './PostsItem.css';
import img from '../../img/avatar.png';

class PostsItem extends React.Component {

  render() {
    return (

      <li className="Posts__item">

        <div className="Posts__image-wrapper">
          <a href="#s">
            <img className="Posts__image" src={img} width="40" height="40" alt="My avatar"/>
          </a>

          <div className="Posts__name-wrapper">

            <a href="#s">
              <p>{ this.props.name }</p>
            </a>

            <a href="#s">
              <span>{ this.props.time }</span>
            </a>


          </div>
        </div>

        <p className="Posts__description">{ this.props.message }</p>

      </li>

    );
  }
}

export default PostsItem;
