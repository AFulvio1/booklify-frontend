import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';
import AdminComponent from '../component/AdminComponent';

const AdminPage = () => {
  return (
    <div className="page">
        <NavbarComponent />
        <div className="container">
            <h1>Admin Page</h1>
            <AdminComponent />
        </div>
        <FooterComponent />
    </div>
  );
};

export default AdminPage;