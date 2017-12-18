import React from 'react';
import { connect } from 'react-redux';
import { aerotheurgeUp, aerotheurgeDown } from '../../actions/statisticsActions';

class AerotheurgeComponent extends React.Component {

  isAerotheurgeDownPossible = () => {
    if (this.props.aerotheurge > 0) { return true }
    else if (this.props.aerotheurge === 10) { return false }
  }

  isAerotheurgeUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.aerotheurge === 10) { return false }
    else { return true }
  }

  aerotheurgeUp = () => {
    this.props.aerotheurgeUp();
  };

  aerotheurgeDown = () => {
    this.props.aerotheurgeDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Aerotheurge: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isAerotheurgeDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="aerotheurgeDown" onClick={ this.aerotheurgeDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="aerotheurge">{ this.props.aerotheurge }</p>
          </div>
          { this.isAerotheurgeUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="aerotheurgeUp" onClick={ this.aerotheurgeUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="aerotheurgeUpInvisible">
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
    aerotheurge: state.statistics.aerotheurge
  };
};

const mapDispatchToProps = (dispatch) => ({
  aerotheurgeUp: () => dispatch(aerotheurgeUp()),
  aerotheurgeDown: () => dispatch(aerotheurgeDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(AerotheurgeComponent);