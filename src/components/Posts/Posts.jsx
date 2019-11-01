import React from 'react';
import './Posts.css';
import PostsItem from './PostsItem';

const Posts = (props) => {
  const { postsData } = props;
  console.log(postsData)

  return (

    <section className="Posts">
      <h2 className="visually-hidden">Posts</h2>

      <ul className="Posts__list">

        { props.postsData &&
          props.postsData.map((elem) =>

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

        {/* <PostsItem name="Anton Kuzmitsky" time="2 Mar at 10:26 am" message="I'm fine"/>
        <PostsItem name="Anton Kuzmitsky" time="9 Mar at 10:26 am" message="I'm ok"/> */}

      </ul>

    </section>

  );
}

export default Posts;
