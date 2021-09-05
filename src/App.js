import React from 'react';
import './App.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Essentials from './Essentials/Essentials';
import WhoWeAre from './Who We Are/WhoWeAre';
import Traceability from './Traceability/Traceability';
import Shop from './Shop/Shop';
import Featured from './FeaturedProducts/Featured';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Shop />
      <Essentials />
      <WhoWeAre />
      <Traceability />
      <Featured />
      {/* <Slick /> */}
    </div>
  );
}

export default App;
