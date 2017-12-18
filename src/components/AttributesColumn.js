import React from 'react';
import { connect } from 'react-redux';
import LevelComponent from './individualAttributes/LevelComponent';
import StrengthComponent from './individualAttributes/StrengthComponent';
import IntelligenceComponent from './individualAttributes/IntelligenceComponent';
import FinesseComponent from './individualAttributes/FinesseComponent';
import ConstitutionComponent from './individualAttributes/ConstitutionComponent';
import MemoryComponent from './individualAttributes/MemoryComponent';
import WitsComponent from './individualAttributes/WitsComponent';

class AttributesColumn extends React.Component {

  render () {
    return (
      <div className="column">
        <div className="box">

          <h1 className="title is-4">ATTRIBUTES</h1>

          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-5">Points Left: </p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <p className="tag is-primary is-medium">
                  <span id="attrLeft">{ this.props.attrLeft }</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span id="attrTotal">{ this.props.attrTotal }</span>
                </p>
              </div>
            </div>
          </div>

          <LevelComponent />
          <StrengthComponent />
          <IntelligenceComponent />
          <FinesseComponent />
          <ConstitutionComponent />
          <MemoryComponent />
          <WitsComponent />

        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    attrLeft: state.statistics.attrLeft,
    attrTotal: state.statistics.attrTotal
  };
};

export default connect(mapStateToProps)(AttributesColumn);