import React from 'react';
import { connect } from 'react-redux';
/* import { changeTalent } from '../../actions/statisticsActions'; */

class TalentForms extends React.Component {

  /* isGeomancerDownPossible = () => {
    if (this.props.geomancer > 0) { return true }
    else if (this.props.geomancer === 10) { return false }
  }

  isGeomancerUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.geomancer === 10) { return false }
    else { return true }
  }

  geomancerUp = () => {
    this.props.geomancerUp();
  };

  geomancerDown = () => {
    this.props.geomancerDown();
  }; */

  render () {
    return (
      <div>

        <div className="level" id="talentLevel2">
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

        <div className="level" id="talentLevel3">
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
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comLeft: state.statistics.comLeft,
    comTotal: state.statistics.comTotal,
    geomancer: state.statistics.geomancer
  };
};

/* const mapDispatchToProps = (dispatch) => ({
  geomancerUp: () => dispatch(geomancerUp()),
  geomancerDown: () => dispatch(geomancerDown())
}); */

export default connect(mapStateToProps)(TalentForms);