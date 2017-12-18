import React from 'react';
import { connect } from 'react-redux';
import { sneakingUp, sneakingDown } from '../../actions/statisticsActions';

class SneakingComponent extends React.Component {

  isSneakingDownPossible = () => {
    if (this.props.sneaking > 0) { return true }
    else if (this.props.sneaking === 0) { return false }
  }

  isSneakingUpPossible = () => {
    if (this.props.civLeft === 0) { return false }
    else if (this.props.sneaking === 5) { return false }
    else { return true }
  }

  sneakingUp = () => {
    this.props.sneakingUp();
  };

  sneakingDown = () => {
    this.props.sneakingDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Sneaking: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isSneakingDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="sneakingDown" onClick={ this.sneakingDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="sneaking">{ this.props.sneaking }</p>
          </div>
          { this.isSneakingUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="sneakingUp" onClick={ this.sneakingUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="sneakingUpInvisible">
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
    civLeft: state.statistics.civLeft,
    civTotal: state.statistics.civTotal,
    sneaking: state.statistics.sneaking
  };
};

const mapDispatchToProps = (dispatch) => ({
  sneakingUp: () => dispatch(sneakingUp()),
  sneakingDown: () => dispatch(sneakingDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(SneakingComponent);