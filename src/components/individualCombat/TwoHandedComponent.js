import React from 'react';
import { connect } from 'react-redux';
import { twoHandedUp, twoHandedDown } from '../../actions/statisticsActions';

class TwoHandedComponent extends React.Component {

  isTwoHandedDownPossible = () => {
    if (this.props.twoHanded > 0) { return true }
    else if (this.props.twoHanded === 10) { return false }
  }

  isTwoHandedUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.twoHanded === 10) { return false }
    else { return true }
  }

  twoHandedUp = () => {
    this.props.twoHandedUp();
  };

  twoHandedDown = () => {
    this.props.twoHandedDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">TwoHanded: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isTwoHandedDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="twoHandedDown" onClick={ this.twoHandedDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="twoHanded">{ this.props.twoHanded }</p>
          </div>
          { this.isTwoHandedUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="twoHandedUp" onClick={ this.twoHandedUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="twoHandedUpInvisible">
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
    twoHanded: state.statistics.twoHanded
  };
};

const mapDispatchToProps = (dispatch) => ({
  twoHandedUp: () => dispatch(twoHandedUp()),
  twoHandedDown: () => dispatch(twoHandedDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(TwoHandedComponent);