import React from 'react';
import { connect } from 'react-redux';
import { changeTalent1, changeTalent2, changeTalent3, changeTalent4, changeTalent5, changeTalent6  } from '../../actions/statisticsActions';

class TalentForms extends React.Component {

  changeTalent1 = (e) => {
    this.props.changeTalent1(e.target.value);
  };
  changeTalent2 = (e) => {
    this.props.changeTalent2(e.target.value);
  };
  changeTalent3 = (e) => {
    this.props.changeTalent3(e.target.value);
  };
  changeTalent4 = (e) => {
    this.props.changeTalent4(e.target.value);
  };
  changeTalent5 = (e) => {
    this.props.changeTalent5(e.target.value);
  };
  changeTalent6 = (e) => {
    this.props.changeTalent6(e.target.value);
  };

  render () {

    const talentOptions = ["(Select Talent)", "All Skilled Up", "Ambidextrous", "Arrow Recovery", "Bigger and Better",
    "Comeback Kid", "Demon", "Duck Duck Goose", "Elemental Affinity", "Elemental Ranger", "Escapist", "Executioner",
    "Far Out Man", "Five-Star Diner", "Glass Cannon", "Guerilla", "Hothead", "Ice King", "Leech", "Living Armour",
    "Lone Wolf", "Mnemonic", "Morning Person", "Opportunist", "Parry Master", "Pet Pal", "Picture of Health",
    "Savage Sortilege", "Slingshot", "Stench", "The Pawn", "Torturer", "Unstable", "Walk It Off", "What A Rush"];

    return (
      <div>

        <div className="level" id="talentLevel2">
          <div className="level-left">

            <div className="level-item talent-level-item">
              <div className="field">
                <div className="control">
                  <div className="select">
                    <select onChange={ this.changeTalent1 } value={ this.props.talent1 }>
                      { talentOptions.map(talent => 
                        <option value={talent} key={talent}> {talent} </option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            { this.props.talentsLeft >= 2 ?
                <div className="level-item talent-level-item">
                  <div className="field">
                    <div className="control">
                      <div className="select">
                        <select onChange={ this.changeTalent2 } value={ this.props.talent2 }>
                          { talentOptions.map(talent => 
                            <option value={talent} key={talent}> {talent} </option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
            : null
            }

          </div>
        </div>

        <div className="level" id="talentLevel3">
          <div className="level-left">

            { this.props.talentsLeft >= 3 ?
                <div className="level-item talent-level-item">
                  <div className="field">
                    <div className="control">
                      <div className="select">
                        <select onChange={ this.changeTalent3 } value={ this.props.talent3 }>
                          { talentOptions.map(talent => 
                            <option value={talent} key={talent}> {talent} </option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
            : null
            }

            { this.props.talentsLeft >= 4 ?
                <div className="level-item talent-level-item">
                  <div className="field">
                    <div className="control">
                      <div className="select">
                        <select onChange={ this.changeTalent4 } value={ this.props.talent4 }>
                          { talentOptions.map(talent => 
                            <option value={talent} key={talent}> {talent} </option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
            : null
            }

          </div>
        </div>

        <div className="level" id="talentLevel4">
          <div className="level-left">

            { this.props.talentsLeft >= 5 ?
                <div className="level-item talent-level-item">
                  <div className="field">
                    <div className="control">
                      <div className="select">
                        <select onChange={ this.changeTalent5 } value={ this.props.talent5 }>
                          { talentOptions.map(talent => 
                            <option value={talent} key={talent}> {talent} </option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
            : null
            }

            { this.props.talentsLeft >= 6 ?
                <div className="level-item talent-level-item">
                  <div className="field">
                    <div className="control">
                      <div className="select">
                        <select onChange={ this.changeTalent6 } value={ this.props.talent6 }>
                          { talentOptions.map(talent => 
                            <option value={talent} key={talent}> {talent} </option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
            : null
            }

          </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    talent1: state.statistics.talent1,
    talent2: state.statistics.talent2,
    talent3: state.statistics.talent3,
    talent4: state.statistics.talent4,
    talent5: state.statistics.talent5,
    talent6: state.statistics.talent6,
    talentsLeft: state.statistics.talentsLeft
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeTalent1: (talent) => dispatch(changeTalent1(talent)),
  changeTalent2: (talent) => dispatch(changeTalent2(talent)),
  changeTalent3: (talent) => dispatch(changeTalent3(talent)),
  changeTalent4: (talent) => dispatch(changeTalent4(talent)),
  changeTalent5: (talent) => dispatch(changeTalent5(talent)),
  changeTalent6: (talent) => dispatch(changeTalent6(talent))
});

export default connect(mapStateToProps, mapDispatchToProps)(TalentForms);