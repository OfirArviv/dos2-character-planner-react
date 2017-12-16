import React from 'react';
import Navbar from './Navbar';
import HeroBar from './HeroBar';

const RootComponent = () => (
  <div>
    <Navbar />
    <HeroBar />
    <div>
      <p>This is the Root component!</p>
      <button className="button">Button!</button>
    </div>
  </div>
);

export default RootComponent;