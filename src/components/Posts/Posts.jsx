import React from 'react';
import { connect } from "react-redux";
import './Posts.css';
import PostsItem from './PostsItem';

const Posts = (props) => {
  const { postsState } = props;

  return (

    <section className="Posts">
      <h2 className="visually-hidden">Posts</h2>

      <ul className="Posts__list">

        { postsState &&
          postsState.map((elem) =>

            <PostsItem
              // properties
              key={ elem.id }
              name={ elem.name }
              time={ elem.time }
              avatar={ elem.avatar }
              body={ elem.body }
            />

          )
        }

      </ul>

    </section>

  );
}

export default connect(
  state => ({
    postsState: state.posts,
  }),
)(Posts);
