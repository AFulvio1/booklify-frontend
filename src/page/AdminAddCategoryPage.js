import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';
import AdminAddCategoryComponent from '../component/AdminAddCategoryComponent';

const AdminAddCategoryPage = () => {
  return (
    <div className="page">
        <NavbarComponent />
        <div className="container">
            <h1>Add Category</h1>
            <AdminAddCategoryComponent />
        </div>
        <FooterComponent />
    </div>
  );
};

export default AdminAddCategoryPage;