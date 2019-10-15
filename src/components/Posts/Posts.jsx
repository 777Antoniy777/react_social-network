import React from 'react';
import './Posts.css';
import PostsItem from './PostsItem';

const Posts = () => {

  return (

    <section className="Posts">
      <h2 className="visually-hidden">Posts</h2>

      <ul className="Posts__list">

        <PostsItem name="Anton Kuzmitsky" time="2 Mar at 10:26 am" message="I'm fine"/>
        <PostsItem name="Anton Kuzmitsky" time="9 Mar at 10:26 am" message="I'm ok"/>

      </ul>

    </section>

  );
}

export default Posts;
