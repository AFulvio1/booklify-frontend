import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';

const AboutPage = () => {
  return (
    <div className="page">
      <NavbarComponent />
      <div className="container">
        <h2>About us</h2>
      </div>
      <FooterComponent />
    </div>
  );
};

export default AboutPage;