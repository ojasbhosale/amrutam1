import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FindDoctors from "./components/FindDoctors";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={ <FindDoctors /> } />
            <Route path='/home' element={ <Home /> } />
            <Route path='/find-doctors' element={ <FindDoctors /> } />
            <Route path='/about-us' element={ <AboutUs /> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
