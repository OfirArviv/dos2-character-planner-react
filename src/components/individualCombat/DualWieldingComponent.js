import React from 'react';
import { connect } from 'react-redux';
import { dualWieldingUp, dualWieldingDown } from '../../actions/statisticsActions';

class DualWieldingComponent extends React.Component {

  isDualWieldingDownPossible = () => {
    if (this.props.dualWielding > 0) { return true }
    else if (this.props.dualWielding === 10) { return false }
  }

  isDualWieldingUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.dualWielding === 10) { return false }
    else { return true }
  }

  dualWieldingUp = () => {
    this.props.dualWieldingUp();
  };

  dualWieldingDown = () => {
    this.props.dualWieldingDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">DualWielding: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isDualWieldingDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="dualWieldingDown" onClick={ this.dualWieldingDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="dualWielding">{ this.props.dualWielding }</p>
          </div>
          { this.isDualWieldingUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="dualWieldingUp" onClick={ this.dualWieldingUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="dualWieldingUpInvisible">
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
    comLeft: state.statistics.comLeft,
    comTotal: state.statistics.comTotal,
    dualWielding: state.statistics.dualWielding
  };
};

const mapDispatchToProps = (dispatch) => ({
  dualWieldingUp: () => dispatch(dualWieldingUp()),
  dualWieldingDown: () => dispatch(dualWieldingDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(DualWieldingComponent);