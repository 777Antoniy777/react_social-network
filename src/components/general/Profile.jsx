import React from 'react';
import Preview from '../Preview/Preview';
import About from '../About/About';
import PostField from '../PostField/PostField';
import Posts from '../Posts/Posts';

const Profile = (props) => {

  return (

    <div className="Main__profile-wrapper">
      <Preview previewCategories={ props.previewCategories } />

      <div className="Main__about-wrapper">
        <About profileData={ props.profileData } />

        <div className="Main__comment-wrapper">

          <PostField
            // handlers
            onSetNewPostValue={ props.onSetNewPostValue }
            onShowNewPostData={ props.onShowNewPostData }
            onSetPostDate={ props.onSetPostDate }
            onSetPostId={ props.onSetPostId }
            onSetPostValue={ props.onSetPostValue }
          />

          <Posts newPostsData={ props.newPostsData } />
        </div>

      </div>
    </div>

  );
}

export default Profile;
