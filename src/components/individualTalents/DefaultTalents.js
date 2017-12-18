import React from 'react';
import { connect } from 'react-redux';

class DefaultTalents extends React.Component {

  render () {
    return (
      <div className="level" id="talentLevel1">
        <div className="level-left">

          <div className="level-item talent-level-item">
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
          </div>

          <div className="level-item talent-level-item">
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
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    race: state.basics.race,
  };
};

export default connect(mapStateToProps)(DefaultTalents);