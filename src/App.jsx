// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Header from './Navbar/header';
import Footer from './Navbar/footer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JS bundle
import Home from './Components/home';
import About from './Components/About';
import Work from './Components/Work';
import Comments  from './Components/Comments';
import Brand from './Components/Brand';
import Contact from './Components/Contact';
import 'font-awesome/css/font-awesome.min.css';
import Event from './Components/event'
import Study from './Components/study'
import Rehman1 from './Components/rehman1';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <BrowserRouter> {/* Wrap the app with BrowserRouter */}
      <div className="App">
        <Header />
        <main>
        <Home/>
        <About/>
        <Work/>
        <Comments/>
        
        <Brand/>
        <Contact/>
        <Event/>
        <Study/>
        <Rehman1/>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


