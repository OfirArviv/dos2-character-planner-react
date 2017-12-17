import React from 'react';
import WeaponsTab from './WeaponsTab';
import DefenseTab from './DefenseTab';
import SkillsTab from './SkillsTab';

const CombatColumn = () => (
  <div className="column">
    <div className="box">
      
      <h1 className="title is-4">COMBAT ABILITIES</h1>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">Points Left: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <p className="tag is-primary is-medium">
                <span id="comLeft">2</span>
                <span>&nbsp;/&nbsp;</span>
                <span id="comTotal">2</span>
            </p>
          </div>
        </div>
      </div>

      <WeaponsTab />
      <DefenseTab />
      <SkillsTab />

    </div>
  </div>
);

export default CombatColumn;