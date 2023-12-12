import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';
import BookTableComponent from '../component/table/BookTableComponent';

const LibraryPage = () => {
  return (
    <div className="page">
      <NavbarComponent />
      <div className="container">
        <h2>Library</h2>
        <BookTableComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

export default LibraryPage;