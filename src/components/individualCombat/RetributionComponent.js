import React from 'react';
import { connect } from 'react-redux';
import { retributionUp, retributionDown } from '../../actions/statisticsActions';

class RetributionComponent extends React.Component {

  isRetributionDownPossible = () => {
    if (this.props.retribution > 0) { return true }
    else if (this.props.retribution === 10) { return false }
  }

  isRetributionUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.retribution === 10) { return false }
    else { return true }
  }

  retributionUp = () => {
    this.props.retributionUp();
  };

  retributionDown = () => {
    this.props.retributionDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Retribution: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isRetributionDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="retributionDown" onClick={ this.retributionDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="retribution">{ this.props.retribution }</p>
          </div>
          { this.isRetributionUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="retributionUp" onClick={ this.retributionUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="retributionUpInvisible">
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
    retribution: state.statistics.retribution
  };
};

const mapDispatchToProps = (dispatch) => ({
  retributionUp: () => dispatch(retributionUp()),
  retributionDown: () => dispatch(retributionDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(RetributionComponent);