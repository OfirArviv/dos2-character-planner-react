import React from 'react';

const TalentsColumn = () => (
  <div className="column">
    <div className="box">
        
      <h1 className="title is-4">TALENTS</h1>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">Talents Left: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <p className="tag is-primary is-medium" id="talentsTag">
              <span id="talentsLeft">1</span>
              <span>&nbsp;/&nbsp;</span>
              <span id="talentsTotal">1</span>
            </p>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select id="racialTalent1" disabled>
              <option value="human">Ingenious</option>
              <option value="human2">Thrifty</option>
              <option value="elf">Ancestral Knowledge</option>
              <option value="elf2">Corpse Eater</option>
              <option value="dwarf">Dwarven Guile</option>
              <option value="dwarf2">Sturdy</option>
              <option value="lizard">Sophisticated</option>
              <option value="lizard2">Spellsong</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div className="select">
            <select id="racialTalent2" disabled>
              <option value="human2">Thrifty</option>
              <option value="human">Ingenious</option>
              <option value="elf">Ancestral Knowledge</option>
              <option value="elf2">Corpse Eater</option>
              <option value="dwarf">Dwarven Guile</option>
              <option value="dwarf2">Sturdy</option>
              <option value="lizard">Sophisticated</option>
              <option value="lizard2">Spellsong</option>
            </select>
          </div>
        </div>
      </div>

      <button className="button is-primary" id="addTalentButton">Add Talent Slot</button>
      <button className="button is-danger" id="removeTalentButton">Remove Talent Slot</button>

      <div className="level is-mobile" id="talent-tooltips-level">
        <div className="level-left">
          <div className="level-item">
            <a className="link" id="talent-tooltips" target="_blank" href=
            "http://divinityoriginalsin2.wiki.fextralife.com/Talents">
              (Tooltip description of each talent).
            </a>
          </div>
        </div>
        <div className="level-right">
        </div>
      </div>

    </div>
  </div>
);

export default TalentsColumn;