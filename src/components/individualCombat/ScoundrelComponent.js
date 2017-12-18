import React from 'react';
import { connect } from 'react-redux';
import { scoundrelUp, scoundrelDown } from '../../actions/statisticsActions';

class ScoundrelComponent extends React.Component {

  isScoundrelDownPossible = () => {
    if (this.props.scoundrel > 0) { return true }
    else if (this.props.scoundrel === 10) { return false }
  }

  isScoundrelUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.scoundrel === 10) { return false }
    else { return true }
  }

  scoundrelUp = () => {
    this.props.scoundrelUp();
  };

  scoundrelDown = () => {
    this.props.scoundrelDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Scoundrel: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isScoundrelDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="scoundrelDown" onClick={ this.scoundrelDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="scoundrel">{ this.props.scoundrel }</p>
          </div>
          { this.isScoundrelUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="scoundrelUp" onClick={ this.scoundrelUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="scoundrelUpInvisible">
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
    scoundrel: state.statistics.scoundrel
  };
};

const mapDispatchToProps = (dispatch) => ({
  scoundrelUp: () => dispatch(scoundrelUp()),
  scoundrelDown: () => dispatch(scoundrelDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoundrelComponent);