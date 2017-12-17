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

  isAttributeDownPossible = (attribute) => {
    if (this.props.attribute > 10) { return true }
    else if (this.props.attribute === 10) { return false }
  }

  isAttributeUpPossible = (attribute) => {
    if (this.props.attrLeft === 0) { return false }
    else if (this.props.attribute === 40) { return false }
    else { return true }
  }

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

          <StrengthComponent isAttributeDownPossible={this.isAttributeDownPossible} isAttributeUpPossible={this.isAttributeUpPossible} />

          <IntelligenceComponent isAttributeDownPossible={this.isAttributeDownPossible} isAttributeUpPossible={this.isAttributeUpPossible} />

          <FinesseComponent isAttributeDownPossible={this.isAttributeDownPossible} isAttributeUpPossible={this.isAttributeUpPossible} />

          <ConstitutionComponent isAttributeDownPossible={this.isAttributeDownPossible} isAttributeUpPossible={this.isAttributeUpPossible} />

          <MemoryComponent isAttributeDownPossible={this.isAttributeDownPossible} isAttributeUpPossible={this.isAttributeUpPossible} />

          <WitsComponent isAttributeDownPossible={this.isAttributeDownPossible} isAttributeUpPossible={this.isAttributeUpPossible} />  

        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    attrLeft: state.attrLeft,
    attrTotal: state.attrTotal
  };
};

/* const mapDispatchToProps = (dispatch) => ({
  changeRace: (race) => dispatch(changeRace(race)),
  changeGender: (gender) => dispatch(changeGender(gender)),
  changeOrigin: (origin) => dispatch(changeOrigin(origin))
}); */

export default connect(mapStateToProps)(AttributesColumn);