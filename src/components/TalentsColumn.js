import React from 'react';
import { connect } from 'react-redux';
import DefaultTalents from './individualTalents/DefaultTalents';
import TalentForms from './individualTalents/TalentForms';

class TalentsColumn extends React.Component {

  render() {
    return (
      <div className="column">
        <div className="box">
            
          <h1 className="title is-4">TALENTS</h1>

          <div className="level is-mobile" id="talentSlotCount">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-5">Talents Left: </p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <p className="tag is-primary is-medium" id="talentsTag">
                  <span id="talentsLeft">{ this.props.talentsLeft }</span>
                </p>
              </div>
            </div>
          </div>

          <DefaultTalents />
          <TalentForms />

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
  };
};

const mapStateToProps = (state) => {
  return {
    talentsLeft: state.statistics.talentsLeft,
    talentsTotal: state.statistics.talentsTotal,
  };
};

export default connect(mapStateToProps)(TalentsColumn);