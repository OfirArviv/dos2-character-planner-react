import React from 'react';
import { connect } from 'react-redux';
/* import { levelUp, levelDown } from '../actions/basicsActions'; */

class MemoryComponent extends React.Component {

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Memory: </p>
          </div>
        </div>
        <div className="level-right">
          { this.props.isAttributeDownPossible("memory") ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="memDown">
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="memory">{ this.props.memory }</p>
          </div>
          { this.props.isAttributeUpPossible("memory") ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="memUp">
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
    memory: state.memory
  };
};

/* const mapDispatchToProps = (dispatch) => ({
  changeRace: (race) => dispatch(changeRace(race)),
  changeGender: (gender) => dispatch(changeGender(gender)),
  changeOrigin: (origin) => dispatch(changeOrigin(origin))
}); */

export default connect(mapStateToProps)(MemoryComponent);