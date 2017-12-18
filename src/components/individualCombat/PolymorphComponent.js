import React from 'react';
import { connect } from 'react-redux';
import { polymorphUp, polymorphDown } from '../../actions/statisticsActions';

class PolymorphComponent extends React.Component {

  isPolymorphDownPossible = () => {
    if (this.props.polymorph > 0) { return true }
    else if (this.props.polymorph === 10) { return false }
  }

  isPolymorphUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.polymorph === 10) { return false }
    else { return true }
  }

  polymorphUp = () => {
    this.props.polymorphUp();
  };

  polymorphDown = () => {
    this.props.polymorphDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Polymorph: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isPolymorphDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="polymorphDown" onClick={ this.polymorphDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="polymorph">{ this.props.polymorph }</p>
          </div>
          { this.isPolymorphUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="polymorphUp" onClick={ this.polymorphUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="polymorphUpInvisible">
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
    polymorph: state.statistics.polymorph
  };
};

const mapDispatchToProps = (dispatch) => ({
  polymorphUp: () => dispatch(polymorphUp()),
  polymorphDown: () => dispatch(polymorphDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(PolymorphComponent);