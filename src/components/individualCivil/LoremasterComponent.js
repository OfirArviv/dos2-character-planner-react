import React from 'react';
import { connect } from 'react-redux';
import { loremasterUp, loremasterDown } from '../../actions/statisticsActions';

class LoremasterComponent extends React.Component {

  isLoremasterDownPossible = () => {
    if (this.props.loremaster > 0) { return true }
    else if (this.props.loremaster === 0) { return false }
  }

  isLoremasterUpPossible = () => {
    if (this.props.civLeft === 0) { return false }
    else if (this.props.loremaster === 5) { return false }
    else { return true }
  }

  loremasterUp = () => {
    this.props.loremasterUp();
  };

  loremasterDown = () => {
    this.props.loremasterDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Loremaster: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isLoremasterDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="loremasterDown" onClick={ this.loremasterDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="loremaster">{ this.props.loremaster }</p>
          </div>
          { this.isLoremasterUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="loremasterUp" onClick={ this.loremasterUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="loremasterUpInvisible">
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
    loremaster: state.statistics.loremaster
  };
};

const mapDispatchToProps = (dispatch) => ({
  loremasterUp: () => dispatch(loremasterUp()),
  loremasterDown: () => dispatch(loremasterDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoremasterComponent);