import React from 'react';
import { connect } from 'react-redux';
import { memoryUp, memoryDown } from '../../actions/statisticsActions';

class MemoryComponent extends React.Component {

  isMemoryDownPossible = () => {
    if (this.props.memory > 10) { return true }
    else if (this.props.memory === 10) { return false }
  }
  
  isMemoryUpPossible = () => {
    if (this.props.attrLeft === 0) { return false }
    else if (this.props.memory === 40) { return false }
    else { return true }
  }

  memoryUp = () => {
    this.props.memoryUp();
  };

  memoryDown = () => {
    this.props.memoryDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Memory: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isMemoryDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="memDown" onClick={ this.memoryDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="memory">{ this.props.memory }</p>
          </div>
          { this.isMemoryUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="memUp" onClick={ this.memoryUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="memUpInvisible">
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
    attrLeft: state.statistics.attrLeft,
    attrTotal: state.statistics.attrTotal,
    level: state.statistics.level,
    memory: state.statistics.memory
  };
};

const mapDispatchToProps = (dispatch) => ({
  memoryUp: () => dispatch(memoryUp()),
  memoryDown: () => dispatch(memoryDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(MemoryComponent);