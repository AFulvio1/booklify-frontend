import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';

const ContactPage = () => {
  return (
    <div className="page">
      <NavbarComponent />
      <div className="container">
        <h2>Contact us</h2>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ContactPage;