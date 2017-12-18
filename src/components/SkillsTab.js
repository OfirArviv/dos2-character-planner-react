import React from 'react';
import AerotheurgeComponent from './individualCombat/AerotheurgeComponent';
import GeomancerComponent from './individualCombat/GeomancerComponent';
import HuntsmanComponent from './individualCombat/HuntsmanComponent';
import HydrosophistComponent from './individualCombat/HydrosophistComponent';
import NecromancerComponent from './individualCombat/NecromancerComponent';
import PolymorphComponent from './individualCombat/PolymorphComponent';
import PyrokineticComponent from './individualCombat/PyrokineticComponent';
import ScoundrelComponent from './individualCombat/ScoundrelComponent';
import SummoningComponent from './individualCombat/SummoningComponent';
import WarfareComponent from './individualCombat/WarfareComponent';

const SkillsTab = () => (
  <div className="tab">
    <input className="accordion" id="tab-three" type="checkbox" name="tabs" />
    <label className="accordion" htmlFor="tab-three">Skills</label>
    <div className="tab-content">

      <AerotheurgeComponent />
      <GeomancerComponent />
      <HuntsmanComponent />
      <HydrosophistComponent />
      <NecromancerComponent />
      <PolymorphComponent />
      <PyrokineticComponent />
      <ScoundrelComponent />
      <SummoningComponent />
      <WarfareComponent />

    </div>
  </div>
);

export default SkillsTab;