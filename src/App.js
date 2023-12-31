import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import LibraryPage from './page/LibraryPage';
import ContactPage from './page/ContactPage';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import AdminPage from './page/AdminPage';
import AdminAddBookPage from './page/AdminAddBookPage';
import AdminAddCategoryPage from './page/AdminAddCategoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/library" element={ <LibraryPage/>} />
        <Route path="/contact" element={ <ContactPage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/signup" element={ <SignUpPage/> } />
        <Route path="/admin" element={ <AdminPage/> } />
        <Route path="/admin/add-book" element={ <AdminAddBookPage/> } />
        <Route path="/admin/add-category" element={ <AdminAddCategoryPage/> } />
      </Routes>
    </Router>
  );
}

export default App;
