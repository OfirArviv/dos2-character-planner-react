import React from 'react';
import { connect } from 'react-redux';
import { leadershipUp, leadershipDown } from '../../actions/statisticsActions';

class LeadershipComponent extends React.Component {

  isLeadershipDownPossible = () => {
    if (this.props.leadership > 0) { return true }
    else if (this.props.leadership === 10) { return false }
  }

  isLeadershipUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.leadership === 10) { return false }
    else { return true }
  }

  leadershipUp = () => {
    this.props.leadershipUp();
  };

  leadershipDown = () => {
    this.props.leadershipDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Leadership: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isLeadershipDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="leadershipDown" onClick={ this.leadershipDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="leadership">{ this.props.leadership }</p>
          </div>
          { this.isLeadershipUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="leadershipUp" onClick={ this.leadershipUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="leadershipUpInvisible">
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
    leadership: state.statistics.leadership
  };
};

const mapDispatchToProps = (dispatch) => ({
  leadershipUp: () => dispatch(leadershipUp()),
  leadershipDown: () => dispatch(leadershipDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeadershipComponent);