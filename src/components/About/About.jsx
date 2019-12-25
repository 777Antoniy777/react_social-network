import React from 'react';
import { connect } from "react-redux";
import './About.css';
import AboutItem from './AboutItem';

const About = (props) => {
  const { profileState } = props;

  return (

    <address className="About">
      <h2 className="visually-hidden">About me</h2>

      { profileState &&
        profileState.map((elem) =>

          <AboutItem
            // properties
            key={ elem.id }
            cat={ elem.cat }
            body={ elem.body }
          />

        )
      }

    </address>

  );
}

export default connect(
  state => ({
    profileState: state.profile,
  }),
)(About);
