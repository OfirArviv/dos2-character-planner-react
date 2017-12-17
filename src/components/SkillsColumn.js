import React from 'react';

const SkillsColumn = () => (
  <div className="column">
    <div className="box" id="skillBox">

      <h1 className="title is-4">AVAILABLE SKILLS</h1>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">Memory Slots: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <div className="tag is-primary is-medium" id="memoryTag">
              <span id="memTotal">3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tags" id="tagWrapper">
        <span className="tag is-primary" id="racialSkill">Racial Skill</span>
        <span className="tag is-primary" id="originSkill">Origin Skill</span>
        <span className="tag aero" id="aeroT1">Aero - Tier 1</span><span className="tag aero" id="aeroT2">Aero - Tier 2</span>
        <span className="tag aero" id="aeroT3">Aero - Tier 3</span><span className="tag aero" id="aeroT4">Aero - Tier 4</span>
        <span className="tag geo" id="geoT1">Geo - Tier 1</span><span className="tag geo" id="geoT2">Geo - Tier 2</span>
        <span className="tag geo" id="geoT3">Geo - Tier 3</span><span className="tag geo" id="geoT4">Geo - Tier 4</span>
        <span className="tag hunt" id="huntT1">Hunt - Tier 1</span><span className="tag hunt" id="huntT2">Hunt - Tier 2</span>
        <span className="tag hunt" id="huntT3">Hunt - Tier 3</span><span className="tag hunt" id="huntT4">Hunt - Tier 4</span>
        <span className="tag hydro" id="hydroT1">Hydro - Tier 1</span><span className="tag hydro" id="hydroT2">Hydro - Tier 2</span>
        <span className="tag hydro" id="hydroT3">Hydro - Tier 3</span><span className="tag hydro" id="hydroT4">Hydro - Tier 4</span>
        <span className="tag necro" id="necroT1">Necro - Tier 1</span><span className="tag necro" id="necroT2">Necro - Tier 2</span>
        <span className="tag necro" id="necroT3">Necro - Tier 3</span><span className="tag necro" id="necroT4">Necro - Tier 4</span>
        <span className="tag poly" id="polyT1">Poly - Tier 1</span><span className="tag poly" id="polyT2">Poly - Tier 2</span>
        <span className="tag poly" id="polyT3">Poly - Tier 3</span><span className="tag poly" id="polyT4">Poly - Tier 4</span>
        <span className="tag pyro" id="pyroT1">Pyro - Tier 1</span><span className="tag pyro" id="pyroT2">Pyro - Tier 2</span>
        <span className="tag pyro" id="pyroT3">Pyro - Tier 3</span><span className="tag pyro" id="pyroT4">Pyro - Tier 4</span>
        <span className="tag scoun" id="scounT1">Scoun - Tier 1</span><span className="tag scoun" id="scounT2">Scoun - Tier 2</span>
        <span className="tag scoun" id="scounT3">Scoun - Tier 3</span><span className="tag scoun" id="scounT4">Scoun - Tier 4</span>
        <span className="tag sum" id="sumT1">Sum - Tier 1</span><span className="tag sum" id="sumT2">Sum - Tier 2</span>
        <span className="tag sum" id="sumT3">Sum - Tier 3</span><span className="tag sum" id="sumT4">Sum - Tier 4</span>
        <span className="tag war" id="warT1">War - Tier 1</span><span className="tag war" id="warT2">War - Tier 2</span>
        <span className="tag war" id="warT3">War - Tier 3</span><span className="tag war" id="warT4">War - Tier 4</span>
      </div>

      <div className="level is-mobile" id="skill-tooltips-level">
        <div className="level-left">
          <div className="level-item">
            <a className="link" id="skill-tooltips" target="_blank" href=
            "http://divinityoriginalsin2.wiki.fextralife.com/All+Skills">
              (Tooltip description of each skill).
            </a>
          </div>
        </div>
        <div className="level-right">
        </div>
      </div>

    </div>
  </div>
);

export default SkillsColumn;