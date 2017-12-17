import React from 'react';

const BasicsColumn = () => (
  <div className="column is-narrow">
    <div className="box">

      <h1 className="title is-4">BASICS</h1>

      <div className="field">
        <label className="label">Race:</label>
        <div className="control">
          <div className="select">
            <select id="race">
              <option value="human">Human</option>
              <option value="dwarf">Dwarf</option>
              <option value="elf">Elf</option>
              <option value="lizard">Lizard</option>
              <option value="udHuman">Undead Human</option>
              <option value="udDwarf">Undead Dwarf</option>
              <option value="udElf">Undead Elf</option>
              <option value="udLizard">Undead Lizard</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Gender:</label>
        <div className="control">
          <div className="select">
            <select id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Origin:</label>
        <div className="control">
          <div className="select">
            <select id="origin">
              <option value="custom">Custom</option>
              <option value="fane">Fane</option>
              <option value="redPrince">Red Prince</option>
              <option value="ifan">Ifan Ben-Mezd</option>
              <option value="lohse">Lohse</option>
              <option value="sebille">Sebille</option>
            </select>
          </div>
        </div>
      </div>

      <img id="portrait" src="/images/humanM.png" />

    </div>
  </div>
);

export default BasicsColumn;