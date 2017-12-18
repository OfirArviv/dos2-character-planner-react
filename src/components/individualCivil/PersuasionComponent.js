import React from 'react';
import { connect } from 'react-redux';
import { persuasionUp, persuasionDown } from '../../actions/statisticsActions';

class PersuasionComponent extends React.Component {

  isPersuasionDownPossible = () => {
    if (this.props.persuasion > 0) { return true }
    else if (this.props.persuasion === 0) { return false }
  }

  isPersuasionUpPossible = () => {
    if (this.props.civLeft === 0) { return false }
    else if (this.props.persuasion === 5) { return false }
    else { return true }
  }

  persuasionUp = () => {
    this.props.persuasionUp();
  };

  persuasionDown = () => {
    this.props.persuasionDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Persuasion: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isPersuasionDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="persuasionDown" onClick={ this.persuasionDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="persuasion">{ this.props.persuasion }</p>
          </div>
          { this.isPersuasionUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="persuasionUp" onClick={ this.persuasionUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="persuasionUpInvisible">
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
    persuasion: state.statistics.persuasion
  };
};

const mapDispatchToProps = (dispatch) => ({
  persuasionUp: () => dispatch(persuasionUp()),
  persuasionDown: () => dispatch(persuasionDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(PersuasionComponent);