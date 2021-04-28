import React from 'react';
import './global.scss';

import Header from './components/header/Header.js';
import Banner from './components/banner/Banner.js';
import Map from './components/map/Map.js';
import Footer from './components/footer/Footer.js';
import AboutUs from './components/aboutUs/AboutUs.js';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Map></Map>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
