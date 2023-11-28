import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';
import SignUpComponent from '../component/SignUpComponent';

const SignUpPage = () => {
  return (
    <div class="page">
        <NavbarComponent />
        <div class="container">
            <h1>Sign Up Page</h1>
            <SignUpComponent />
        </div>
        <FooterComponent />
    </div>
  );
};

export default SignUpPage;