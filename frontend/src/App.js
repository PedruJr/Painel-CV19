import React from 'react';
import './global.scss';

import Header from './components/header/Header.js';
import Banner from './components/banner/Banner.js';
import Map from './components/map/Map.js';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Map></Map>
    </div>
  );
}

export default App;
