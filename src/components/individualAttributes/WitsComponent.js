import React from 'react';
import { connect } from 'react-redux';
import { witsUp, witsDown } from '../../actions/statisticsActions';

class WitsComponent extends React.Component {

  isWitsDownPossible = () => {
    if (this.props.wits > 10) { return true }
    else if (this.props.wits === 10) { return false }
  }
  
  isWitsUpPossible = () => {
    if (this.props.attrLeft === 0) { return false }
    else if (this.props.wits === 40) { return false }
    else { return true }
  }

  witsUp = () => {
    this.props.witsUp();
  };

  witsDown = () => {
    this.props.witsDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Wits: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isWitsDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="witsDown" onClick={ this.witsDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="wits">{ this.props.wits }</p>
          </div>
          { this.isWitsUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="witsUp" onClick={ this.witsUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="witsUpInvisible">
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
    wits: state.statistics.wits
  };
};

const mapDispatchToProps = (dispatch) => ({
  witsUp: () => dispatch(witsUp()),
  witsDown: () => dispatch(witsDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(WitsComponent);