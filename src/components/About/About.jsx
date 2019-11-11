import React from 'react';
import './About.css';
import AboutItem from './AboutItem';

const About = (props) => {
  const { profileData } = props;

  return (

    <address className="About">
      <h2 className="visually-hidden">About me</h2>

      { profileData &&
        profileData.map((elem) =>

          <AboutItem
            key={ elem.id }
            cat={ elem.cat }
            text={ elem.text }
          />

        )
      }

    </address>

  );
}

export default About;
