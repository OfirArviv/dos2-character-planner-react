import React from 'react';
import { connect } from 'react-redux';
/* import { levelUp, levelDown } from '../actions/basicsActions'; */

class FinesseComponent extends React.Component {

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Finesse: </p>
          </div>
        </div>
        <div className="level-right">
          { this.props.isAttributeDownPossible("finesse") ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="finDown">
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="finesse">{ this.props.finesse }</p>
          </div>
          { this.props.isAttributeUpPossible("finesse") ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="finUp">
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          : null }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attrLeft: state.attrLeft,
    attrTotal: state.attrTotal,
    level: state.level,
    finesse: state.finesse
  };
};

/* const mapDispatchToProps = (dispatch) => ({
  changeRace: (race) => dispatch(changeRace(race)),
  changeGender: (gender) => dispatch(changeGender(gender)),
  changeOrigin: (origin) => dispatch(changeOrigin(origin))
}); */

export default connect(mapStateToProps)(FinesseComponent);