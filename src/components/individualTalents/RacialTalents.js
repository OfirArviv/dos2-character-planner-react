import React from 'react';
import { connect } from 'react-redux';

class RacialTalents extends React.Component {

  render () {
    return (
      <div className="level" id="talentLevel1">
        <div className="level-left">

          <div className="level-item talent-level-item">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select id="racialTalent1" value={ this.props.race } disabled>
                    <option value="human">Ingenious</option>
                    <option value="elf">Ancestral Knowledge</option>
                    <option value="dwarf">Dwarven Guile</option>
                    <option value="lizard">Sophisticated</option>
                    <option value="undeadhuman">Ingenious</option>
                    <option value="undeadelf">Ancestral Knowledge</option>
                    <option value="undeaddwarf">Dwarven Guile</option>
                    <option value="undeadlizard">Sophisticated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="level-item talent-level-item">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select id="racialTalent2" value={ this.props.race } disabled>
                    <option value="human">Thrifty</option>
                    <option value="elf">Corpse Eater</option>
                    <option value="dwarf">Sturdy</option>
                    <option value="lizard">Spellsong</option>
                    <option value="undeadhuman">Thrifty</option>
                    <option value="undeadelf">Corpse Eater</option>
                    <option value="undeaddwarf">Sturdy</option>
                    <option value="undeadlizard">Spellsong</option>
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

export default connect(mapStateToProps)(RacialTalents);