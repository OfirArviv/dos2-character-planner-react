import React from 'react';
import { connect } from 'react-redux';
import { levelUp, levelDown } from '../../actions/statisticsActions';

class LevelComponent extends React.Component {

  isLevelUpPossible = () => {
    if (this.props.level === 26) { return false }
    else { return true }
  };

  isLevelDownPossible = () => {
    if (this.props.level === 1) { return false }
    else if (this.props.attrLeft < 2) { return false }
    else if (this.props.level === 2 || this.props.level === 6 || this.props.level === 10 || this.props.level === 14 ||
            this.props.level === 18 || this.props.level === 22 || this.props.level === 26) {
              return (this.props.civLeft === 0 ? false : true );
    }
    else { return true }
  };

  levelUp = () => {
    this.props.levelUp();
  };

  levelDown = () => {
    this.props.levelDown();
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
              <button className="button is-primary is-small" id="levelDown" onClick={ this.levelDown }>
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
              <button className="button is-primary is-small" id="levelUp" onClick={ this.levelUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          : <div className="level-item">
              <button className="button is-primary is-small" id="levelUpInvisible">
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attrLeft: state.statistics.attrLeft,
    attrTotal: state.statistics.attrTotal,
    level: state.statistics.level,
    civLeft: state.statistics.civLeft
  };
};

const mapDispatchToProps = (dispatch) => ({
  levelUp: () => dispatch(levelUp()),
  levelDown: () => dispatch(levelDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(LevelComponent);