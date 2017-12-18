import React from 'react';
import { connect } from 'react-redux';
import { telekinesisUp, telekinesisDown } from '../../actions/statisticsActions';

class TelekinesisComponent extends React.Component {

  isTelekinesisDownPossible = () => {
    if (this.props.telekinesis > 0) { return true }
    else if (this.props.telekinesis === 0) { return false }
  }

  isTelekinesisUpPossible = () => {
    if (this.props.civLeft === 0) { return false }
    else if (this.props.telekinesis === 5) { return false }
    else { return true }
  }

  telekinesisUp = () => {
    this.props.telekinesisUp();
  };

  telekinesisDown = () => {
    this.props.telekinesisDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Telekinesis: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isTelekinesisDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="telekinesisDown" onClick={ this.telekinesisDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="telekinesis">{ this.props.telekinesis }</p>
          </div>
          { this.isTelekinesisUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="telekinesisUp" onClick={ this.telekinesisUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="telekinesisUpInvisible">
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
    telekinesis: state.statistics.telekinesis
  };
};

const mapDispatchToProps = (dispatch) => ({
  telekinesisUp: () => dispatch(telekinesisUp()),
  telekinesisDown: () => dispatch(telekinesisDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(TelekinesisComponent);