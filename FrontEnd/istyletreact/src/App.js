import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, redirect}
    from 'react-router-dom';
import Home from './pages';
import Applications from './pages/applications';
import Contact from './pages/contact';
import Knowledgelayout from './layouts/knowledgelayout';
import Pagenotfound from './pages/pagenotfound';
import Subknowsheet from "./pages/knowledgepage/subknowsheet";
import Subknowconcept from "./pages/knowledgepage/subknowconcept";
import Subknowfront from "./pages/knowledgepage/subknowfront";
import Subknowback from "./pages/knowledgepage/subknowback";
import Subknowuxui from "./pages/knowledgepage/subknowuxui";
import Subknowcourse from "./pages/knowledgepage/subknowcourse";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/applications' element={<Applications/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/knowledge' element={<Knowledgelayout/>}>
                <Route path='' element={<Subknowsheet/>} />
                <Route path='mainconcept' element={<Subknowconcept/>} />
                <Route path='frontend' element={<Subknowfront/>} />
                <Route path='backend' element={<Subknowback/>} />
                <Route path='uxui' element={<Subknowuxui/>} />
                <Route path='course' element={<Subknowcourse/>} />
        </Route>
        <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
