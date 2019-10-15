import React from 'react';
import './About.css';
import AboutItem from './AboutItem';

const About = () => {

  return (

    <address className="About">
      <h2 className="visually-hidden">About me</h2>

      <AboutItem cat="Birthday:" val="January 7, 1996" />
      <AboutItem cat="Current city:" val="Omsk" />
      <AboutItem cat="Institution:" val="ОмГТУ" />
      <AboutItem cat="Languages:" val="Русский, English" />
      <AboutItem cat="Sister:" val="Dasha Maslova" />

    </address>

  );
}

export default About;
