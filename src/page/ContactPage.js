import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';

const ContactPage = () => {
  return (
    <div class="page">
      <NavbarComponent />
      <div class="container">
        <h2>Contact us</h2>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ContactPage;