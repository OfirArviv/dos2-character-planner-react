import React from 'react';
import LeadershipComponent from './individualCombat/LeadershipComponent';
import PerseveranceComponent from './individualCombat/PerseveranceComponent';
import RetributionComponent from './individualCombat/RetributionComponent';

const DefenseTab = () => (
  <div className="tab">
    <input className="accordion" id="tab-two" type="checkbox" name="tabs" />
    <label className="accordion" htmlFor="tab-two">Defense</label>
    <div className="tab-content">

      <LeadershipComponent />
      <PerseveranceComponent />
      <RetributionComponent />

    </div>
  </div>
);

export default DefenseTab;