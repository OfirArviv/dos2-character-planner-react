import React from 'react';
import { connect } from 'react-redux';
import { singleHandedUp, singleHandedDown } from '../../actions/statisticsActions';

class SingleHandedComponent extends React.Component {

  isSingleHandedDownPossible = () => {
    if (this.props.singleHanded > 0) { return true }
    else if (this.props.singleHanded === 10) { return false }
  }

  isSingleHandedUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.singleHanded === 10) { return false }
    else { return true }
  }

  singleHandedUp = () => {
    this.props.singleHandedUp();
  };

  singleHandedDown = () => {
    this.props.singleHandedDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Single Handed: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isSingleHandedDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="singleHandedDown" onClick={ this.singleHandedDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="singleHanded">{ this.props.singleHanded }</p>
          </div>
          { this.isSingleHandedUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="singleHandedUp" onClick={ this.singleHandedUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="singleHandedUpInvisible">
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
    singleHanded: state.statistics.singleHanded
  };
};

const mapDispatchToProps = (dispatch) => ({
  singleHandedUp: () => dispatch(singleHandedUp()),
  singleHandedDown: () => dispatch(singleHandedDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleHandedComponent);