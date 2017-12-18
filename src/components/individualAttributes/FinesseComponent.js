import React from 'react';
import { connect } from 'react-redux';
import { finesseUp, finesseDown } from '../../actions/statisticsActions';

class FinesseComponent extends React.Component {

  isFinesseDownPossible = () => {
    if (this.props.finesse > 10) { return true }
    else if (this.props.finesse === 10) { return false }
  }
  
  isFinesseUpPossible = () => {
    if (this.props.attrLeft === 0) { return false }
    else if (this.props.finesse === 40) { return false }
    else { return true }
  }

  finesseUp = () => {
    this.props.finesseUp();
  };

  finesseDown = () => {
    this.props.finesseDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Finesse: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isFinesseDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="finDown" onClick={ this.finesseDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="finesse">{ this.props.finesse }</p>
          </div>
          { this.isFinesseUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="finUp" onClick={ this.finesseUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="finUpInvisible">
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
    finesse: state.statistics.finesse
  };
};

const mapDispatchToProps = (dispatch) => ({
  finesseUp: () => dispatch(finesseUp()),
  finesseDown: () => dispatch(finesseDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(FinesseComponent);