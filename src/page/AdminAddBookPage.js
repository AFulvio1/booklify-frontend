import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';
import AdminAddBookComponent from '../component/AdminAddBookComponent';

const AdminAddBookPage = () => {
  return (
    <div className="page">
        <NavbarComponent />
        <div className="container">
            <h1>Add Book</h1>
            <AdminAddBookComponent />
        </div>
        <FooterComponent />
    </div>
  );
};

export default AdminAddBookPage;