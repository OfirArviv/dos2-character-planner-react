import React from 'react';
import { connect } from 'react-redux';
import { summoningUp, summoningDown } from '../../actions/statisticsActions';

class SummoningComponent extends React.Component {

  isSummoningDownPossible = () => {
    if (this.props.summoning > 0) { return true }
    else if (this.props.summoning === 10) { return false }
  }

  isSummoningUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.summoning === 10) { return false }
    else { return true }
  }

  summoningUp = () => {
    this.props.summoningUp();
  };

  summoningDown = () => {
    this.props.summoningDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Summoning: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isSummoningDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="summoningDown" onClick={ this.summoningDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="summoning">{ this.props.summoning }</p>
          </div>
          { this.isSummoningUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="summoningUp" onClick={ this.summoningUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="summoningUpInvisible">
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
    summoning: state.statistics.summoning
  };
};

const mapDispatchToProps = (dispatch) => ({
  summoningUp: () => dispatch(summoningUp()),
  summoningDown: () => dispatch(summoningDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(SummoningComponent);