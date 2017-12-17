import React from 'react';
import { connect } from 'react-redux';
/* import { levelUp, levelDown } from '../actions/basicsActions'; */

class IntelligenceComponent extends React.Component {

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Intelligence: </p>
          </div>
        </div>
        <div className="level-right">
          { this.props.isAttributeDownPossible("intelligence") ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="intDown">
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="intelligence">{ this.props.intelligence }</p>
          </div>
          { this.props.isAttributeUpPossible("intelligence") ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="intUp">
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
    intelligence: state.intelligence
  };
};

/* const mapDispatchToProps = (dispatch) => ({
  changeRace: (race) => dispatch(changeRace(race)),
  changeGender: (gender) => dispatch(changeGender(gender)),
  changeOrigin: (origin) => dispatch(changeOrigin(origin))
}); */

export default connect(mapStateToProps)(IntelligenceComponent);