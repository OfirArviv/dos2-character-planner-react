import React from 'react';
import { connect } from 'react-redux';
import { warfareUp, warfareDown } from '../../actions/statisticsActions';

class WarfareComponent extends React.Component {

  isWarfareDownPossible = () => {
    if (this.props.warfare > 0) { return true }
    else if (this.props.warfare === 10) { return false }
  }

  isWarfareUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.warfare === 10) { return false }
    else { return true }
  }

  warfareUp = () => {
    this.props.warfareUp();
  };

  warfareDown = () => {
    this.props.warfareDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Warfare: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isWarfareDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="warfareDown" onClick={ this.warfareDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="warfare">{ this.props.warfare }</p>
          </div>
          { this.isWarfareUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="warfareUp" onClick={ this.warfareUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="warfareUpInvisible">
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
    warfare: state.statistics.warfare
  };
};

const mapDispatchToProps = (dispatch) => ({
  warfareUp: () => dispatch(warfareUp()),
  warfareDown: () => dispatch(warfareDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(WarfareComponent);