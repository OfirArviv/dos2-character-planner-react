import React from 'react';
import { connect } from 'react-redux';
import { pyrokineticUp, pyrokineticDown } from '../../actions/statisticsActions';

class PyrokineticComponent extends React.Component {

  isPyrokineticDownPossible = () => {
    if (this.props.pyrokinetic > 0) { return true }
    else if (this.props.pyrokinetic === 10) { return false }
  }

  isPyrokineticUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.pyrokinetic === 10) { return false }
    else { return true }
  }

  pyrokineticUp = () => {
    this.props.pyrokineticUp();
  };

  pyrokineticDown = () => {
    this.props.pyrokineticDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Pyrokinetic: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isPyrokineticDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="pyrokineticDown" onClick={ this.pyrokineticDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="pyrokinetic">{ this.props.pyrokinetic }</p>
          </div>
          { this.isPyrokineticUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="pyrokineticUp" onClick={ this.pyrokineticUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="pyrokineticUpInvisible">
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
    pyrokinetic: state.statistics.pyrokinetic
  };
};

const mapDispatchToProps = (dispatch) => ({
  pyrokineticUp: () => dispatch(pyrokineticUp()),
  pyrokineticDown: () => dispatch(pyrokineticDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(PyrokineticComponent);