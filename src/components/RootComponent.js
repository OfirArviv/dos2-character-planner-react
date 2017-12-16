import React from 'react';
import Navbar from './Navbar';

const RootComponent = () => (
  <div>
    <Navbar />
    <div>
      <p>This is the Root component!</p>
      <button className="button">Button!</button>
    </div>
  </div>
);

export default RootComponent;