import React from 'react';
import { connect } from 'react-redux';
import { huntsmanUp, huntsmanDown } from '../../actions/statisticsActions';

class HuntsmanComponent extends React.Component {

  isHuntsmanDownPossible = () => {
    if (this.props.huntsman > 0) { return true }
    else if (this.props.huntsman === 10) { return false }
  }

  isHuntsmanUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.huntsman === 10) { return false }
    else { return true }
  }

  huntsmanUp = () => {
    this.props.huntsmanUp();
  };

  huntsmanDown = () => {
    this.props.huntsmanDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Huntsman: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isHuntsmanDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="huntsmanDown" onClick={ this.huntsmanDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="huntsman">{ this.props.huntsman }</p>
          </div>
          { this.isHuntsmanUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="huntsmanUp" onClick={ this.huntsmanUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="huntsmanUpInvisible">
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
    huntsman: state.statistics.huntsman
  };
};

const mapDispatchToProps = (dispatch) => ({
  huntsmanUp: () => dispatch(huntsmanUp()),
  huntsmanDown: () => dispatch(huntsmanDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(HuntsmanComponent);