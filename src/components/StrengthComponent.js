import React from 'react';
import { connect } from 'react-redux';
/* import { levelUp, levelDown } from '../actions/basicsActions'; */

class LevelComponent extends React.Component {

  isLevelUpPossible = () => {
    if (this.props.level === 26) { return false }
    else { return true }
  };

  isLevelDownPossible = () => {
    if (this.props.level === 1) { return false }
    else if (this.props.attrLeft <= 2) { return false }
    else if (this.props.level === 2 || this.props.level === 6 || this.props.level === 10 || this.props.level === 14 ||
        this.props.level === 18 || this.props.level === 22 || this.props.level === 26) {
          if (this.props.civLeft === 0) {
            return false
          }
    }
    else { return true }
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">Level: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isLevelDownPossible() ?
            <div className="level-item" id="decLevelDiv">
              <button className="button is-primary is-small" id="levelDown">
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="level">{ this.props.level }</p>
          </div>
          { this.isLevelUpPossible() ?
            <div className="level-item">
              <button className="button is-primary is-small" id="levelUp">
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          : null }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attrLeft: state.attrLeft,
    attrTotal: state.attrTotal,
    level: state.level,
    civLeft: state.civLeft
  };
};

/* const mapDispatchToProps = (dispatch) => ({
  changeRace: (race) => dispatch(changeRace(race)),
  changeGender: (gender) => dispatch(changeGender(gender)),
  changeOrigin: (origin) => dispatch(changeOrigin(origin))
}); */

export default connect(mapStateToProps)(LevelComponent);