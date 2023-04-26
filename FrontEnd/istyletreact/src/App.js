import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Applications from './pages/applications';
import Contact from './pages/contact';
import Knowledge from './pages/knowledge';
import Pagenotfound from './pages/pagenotfound';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/applications' element={<Applications/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/knowledge' element={<Knowledge/>} />
        <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    </Router>
  );
}

export default App;
