import React from 'react';
import './Posts.css';
import PostsItem from './PostsItem';

const Posts = (props) => {
  const { state } = props;
  const postsData = state.postsData;

  return (

    <section className="Posts">
      <h2 className="visually-hidden">Posts</h2>

      <ul className="Posts__list">

        { postsData &&
          postsData.map((elem) =>

            <PostsItem
              // properties
              key={ elem.id }
              name={ elem.name }
              time={ elem.time }
              avatar={ elem.avatar }
              message={ elem.text }
            />

          )
        }

      </ul>

    </section>

  );
}

export default Posts;
