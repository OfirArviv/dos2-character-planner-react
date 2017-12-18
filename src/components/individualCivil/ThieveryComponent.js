import React from 'react';
import { connect } from 'react-redux';
import { thieveryUp, thieveryDown } from '../../actions/statisticsActions';

class ThieveryComponent extends React.Component {

  isThieveryDownPossible = () => {
    if (this.props.thievery > 0) { return true }
    else if (this.props.thievery === 0) { return false }
  }

  isThieveryUpPossible = () => {
    if (this.props.civLeft === 0) { return false }
    else if (this.props.thievery === 5) { return false }
    else { return true }
  }

  thieveryUp = () => {
    this.props.thieveryUp();
  };

  thieveryDown = () => {
    this.props.thieveryDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Thievery: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isThieveryDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="thieveryDown" onClick={ this.thieveryDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="thievery">{ this.props.thievery }</p>
          </div>
          { this.isThieveryUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="thieveryUp" onClick={ this.thieveryUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="thieveryUpInvisible">
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
    thievery: state.statistics.thievery
  };
};

const mapDispatchToProps = (dispatch) => ({
  thieveryUp: () => dispatch(thieveryUp()),
  thieveryDown: () => dispatch(thieveryDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(ThieveryComponent);