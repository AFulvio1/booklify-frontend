import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';
import AdminComponent from '../component/AdminComponent';

const AdminPage = () => {
  return (
    <div class="page">
        <NavbarComponent />
        <div class="container">
            <h1>Sign Up Page</h1>
            <AdminComponent />
        </div>
        <FooterComponent />
    </div>
  );
};

export default AdminPage;