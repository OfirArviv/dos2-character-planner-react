import React from 'react';
import { connect } from 'react-redux';
import { strengthUp, strengthDown } from '../../actions/statisticsActions';

class StrengthComponent extends React.Component {

  isStrengthDownPossible = () => {
    if (this.props.strength > 10) { return true }
    else if (this.props.strength === 10) { return false }
  }

  isStrengthUpPossible = () => {
    if (this.props.attrLeft === 0) { return false }
    else if (this.props.strength === 40) { return false }
    else { return true }
  }

  strengthUp = () => {
    this.props.strengthUp();
  };

  strengthDown = () => {
    this.props.strengthDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Strength: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isStrengthDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="strDown" onClick={ this.strengthDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="strength">{ this.props.strength }</p>
          </div>
          { this.isStrengthUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="strUp" onClick={ this.strengthUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="strUpInvisible">
                <span className="icon is-small">
                  <i className="fa fa-plus"></i>
                </span>
              </button>
            </div> }
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
    strength: state.statistics.strength
  };
};

const mapDispatchToProps = (dispatch) => ({
  strengthUp: () => dispatch(strengthUp()),
  strengthDown: () => dispatch(strengthDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(StrengthComponent);