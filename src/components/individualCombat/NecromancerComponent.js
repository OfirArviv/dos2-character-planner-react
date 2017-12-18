import React from 'react';
import { connect } from 'react-redux';
import { necromancerUp, necromancerDown } from '../../actions/statisticsActions';

class NecromancerComponent extends React.Component {

  isNecromancerDownPossible = () => {
    if (this.props.necromancer > 0) { return true }
    else if (this.props.necromancer === 10) { return false }
  }

  isNecromancerUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.necromancer === 10) { return false }
    else { return true }
  }

  necromancerUp = () => {
    this.props.necromancerUp();
  };

  necromancerDown = () => {
    this.props.necromancerDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Necromancer: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isNecromancerDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="necromancerDown" onClick={ this.necromancerDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="necromancer">{ this.props.necromancer }</p>
          </div>
          { this.isNecromancerUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="necromancerUp" onClick={ this.necromancerUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="necromancerUpInvisible">
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
    necromancer: state.statistics.necromancer
  };
};

const mapDispatchToProps = (dispatch) => ({
  necromancerUp: () => dispatch(necromancerUp()),
  necromancerDown: () => dispatch(necromancerDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(NecromancerComponent);