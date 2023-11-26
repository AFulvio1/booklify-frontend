import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Library from './page/Library';
import Contact from './page/Contact';
import UserComponent from './component/UserComponent';
import CategoryComponent from './component/CategoryComponent';
import BookComponent from './component/BookComponent';
import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';

function App() {
  return (
      <div className="container">
        <NavbarComponent />
        <UserComponent />
        <CategoryComponent />
        <BookComponent />
        <FooterComponent />
      </div> 
  );
}

export default App;
