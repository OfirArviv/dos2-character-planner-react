import React from 'react';
import { connect } from 'react-redux';
import WeaponsTab from './WeaponsTab';
import DefenseTab from './DefenseTab';
import SkillsTab from './SkillsTab';

class CombatColumn extends React.Component {

  render () {
    return (
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
                    <span id="comLeft">{ this.props.comLeft }</span>
                    <span>&nbsp;/&nbsp;</span>
                    <span id="comTotal">{ this.props.comTotal }</span>
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
  };
};

const mapStateToProps = (state) => {
  return {
    comLeft: state.statistics.comLeft,
    comTotal: state.statistics.comTotal
  };
};

export default connect(mapStateToProps)(CombatColumn);