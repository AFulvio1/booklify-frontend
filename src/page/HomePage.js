import React from 'react';
import UserCardComponent from '../component/card/UserCardComponent';
import CategoryCardComponent from '../component/card/CategoryCardComponent';
import BookCardComponent from '../component/card/BookCardComponent';
import NavbarComponent from '../component/NavbarComponent';
import FooterComponent from '../component/FooterComponent';

const HomePage = () => {
  return (
    <div class="page">
        <NavbarComponent />
        <div class="container">
          <UserCardComponent />
          <CategoryCardComponent />
          <BookCardComponent />
        </div>
        <FooterComponent />
      </div> 
  );
};

export default HomePage;