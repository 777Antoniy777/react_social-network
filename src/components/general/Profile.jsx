import React from 'react';
import Preview from '../Preview/Preview';
import About from '../About/About';
import PostField from '../PostField/PostField';
import Posts from '../Posts/Posts';

const Profile = (props) => {

  return (

    <div className="Main__profile-wrapper">
      <Preview />

      <div className="Main__about-wrapper">
        <About />

        <div className="Main__comment-wrapper">
          <PostField onSetNewPost={ props.onSetNewPost } />
          <Posts postsData={ props.postsData } />
        </div>

      </div>
    </div>

  );
}

export default Profile;
