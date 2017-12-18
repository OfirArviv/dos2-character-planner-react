import React from 'react';
import DualWieldingComponent from './individualCombat/DualWieldingComponent';
import RangedComponent from './individualCombat/RangedComponent';
import SingleHandedComponent from './individualCombat/SingleHandedComponent';
import TwoHandedComponent from './individualCombat/TwoHandedComponent';

const WeaponsTab = () => (
  <div className="tab">
    <input className="accordion" id="tab-one" type="checkbox" name="tabs" />
    <label className="accordion" htmlFor="tab-one">Weapons</label>
    <div className="tab-content">
      
      <DualWieldingComponent />
      <RangedComponent />
      <SingleHandedComponent />
      <TwoHandedComponent />

    </div>
  </div>
);

export default WeaponsTab;