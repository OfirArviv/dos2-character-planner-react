import React from 'react';
import { connect } from 'react-redux';
import { rangedUp, rangedDown } from '../../actions/statisticsActions';

class RangedComponent extends React.Component {

  isRangedDownPossible = () => {
    if (this.props.ranged > 0) { return true }
    else if (this.props.ranged === 10) { return false }
  }

  isRangedUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.ranged === 10) { return false }
    else { return true }
  }

  rangedUp = () => {
    this.props.rangedUp();
  };

  rangedDown = () => {
    this.props.rangedDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Ranged: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isRangedDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="rangedDown" onClick={ this.rangedDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="ranged">{ this.props.ranged }</p>
          </div>
          { this.isRangedUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="rangedUp" onClick={ this.rangedUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="rangedUpInvisible">
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
    ranged: state.statistics.ranged
  };
};

const mapDispatchToProps = (dispatch) => ({
  rangedUp: () => dispatch(rangedUp()),
  rangedDown: () => dispatch(rangedDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(RangedComponent);