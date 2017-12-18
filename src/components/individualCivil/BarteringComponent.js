import React from 'react';
import { connect } from 'react-redux';
import { barteringUp, barteringDown } from '../../actions/statisticsActions';

class BarteringComponent extends React.Component {

  isBarteringDownPossible = () => {
    if (this.props.bartering > 0) { return true }
    else if (this.props.bartering === 0) { return false }
  }
  
  isBarteringUpPossible = () => {
    if (this.props.civLeft === 0) { return false }
    else if (this.props.bartering === 5) { return false }
    else { return true }
  }

  barteringUp = () => {
    this.props.barteringUp();
  };

  barteringDown = () => {
    this.props.barteringDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Bartering: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isBarteringDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="barDown" onClick={ this.barteringDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="bartering">{ this.props.bartering }</p>
          </div>
          { this.isBarteringUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="barteringUp" onClick={ this.barteringUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="barteringUpInvisible">
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
    bartering: state.statistics.bartering
  };
};

const mapDispatchToProps = (dispatch) => ({
  barteringUp: () => dispatch(barteringUp()),
  barteringDown: () => dispatch(barteringDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(BarteringComponent);