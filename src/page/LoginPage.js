import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';
import LoginComponent from '../component/LoginComponent';

const LoginPage = () => {
  return (
    <div class="page">
      <NavbarComponent />
      <div class="container">
        <h1>Login Page</h1>
        <LoginComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

export default LoginPage;