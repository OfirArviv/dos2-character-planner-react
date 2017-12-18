import React from 'react';
import { connect } from 'react-redux';
import { luckyCharmUp, luckyCharmDown } from '../../actions/statisticsActions';

class LuckyCharmComponent extends React.Component {

  isLuckyCharmDownPossible = () => {
    if (this.props.luckyCharm > 0) { return true }
    else if (this.props.luckyCharm === 0) { return false }
  }

  isLuckyCharmUpPossible = () => {
    if (this.props.civLeft === 0) { return false }
    else if (this.props.luckyCharm === 5) { return false }
    else { return true }
  }

  luckyCharmUp = () => {
    this.props.luckyCharmUp();
  };

  luckyCharmDown = () => {
    this.props.luckyCharmDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Lucky Charm: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isLuckyCharmDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="luckyCharmDown" onClick={ this.luckyCharmDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="luckyCharm">{ this.props.luckyCharm }</p>
          </div>
          { this.isLuckyCharmUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="luckyCharmUp" onClick={ this.luckyCharmUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="luckyCharmUpInvisible">
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
    luckyCharm: state.statistics.luckyCharm
  };
};

const mapDispatchToProps = (dispatch) => ({
  luckyCharmUp: () => dispatch(luckyCharmUp()),
  luckyCharmDown: () => dispatch(luckyCharmDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(LuckyCharmComponent);