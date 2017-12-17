import React from 'react';
import Navbar from './Navbar';
import HeroBar from './HeroBar';
import BasicsColumn from './BasicsColumn';
import AttributesColumn from './AttributesColumn';
import CivilColumn from './CivilColumn';
import CombatColumn from './CombatColumn';
import SkillsColumn from './SkillsColumn';
import TalentsColumn from './TalentsColumn';

const RootComponent = () => (
  <div>

    <Navbar />
    <HeroBar />

    <div className="section">
      <div className="container">
        <div className="columns" id="row1">
          <BasicsColumn />
          <AttributesColumn />
          <CivilColumn />
          <CombatColumn />
        </div>
        <div className="columns" id="row2">
          <SkillsColumn />
          <TalentsColumn />
        </div>
      </div>
    </div>



  </div>
);

export default RootComponent;