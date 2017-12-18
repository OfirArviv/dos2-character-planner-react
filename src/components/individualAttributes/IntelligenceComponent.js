import React from 'react';
import { connect } from 'react-redux';
import { intelligenceUp, intelligenceDown } from '../../actions/statisticsActions';

class IntelligenceComponent extends React.Component {

  isIntelligenceDownPossible = () => {
    if (this.props.intelligence > 10) { return true }
    else if (this.props.intelligence === 10) { return false }
  }
  
  isIntelligenceUpPossible = () => {
    if (this.props.attrLeft === 0) { return false }
    else if (this.props.intelligence === 40) { return false }
    else { return true }
  }

  intelligenceUp = () => {
    this.props.intelligenceUp();
  };

  intelligenceDown = () => {
    this.props.intelligenceDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Intelligence: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isIntelligenceDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="intDown" onClick={ this.intelligenceDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="intelligence">{ this.props.intelligence }</p>
          </div>
          { this.isIntelligenceUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="intUp" onClick={ this.intelligenceUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="intUpInvisible">
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
    intelligence: state.statistics.intelligence
  };
};

const mapDispatchToProps = (dispatch) => ({
  intelligenceUp: () => dispatch(intelligenceUp()),
  intelligenceDown: () => dispatch(intelligenceDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(IntelligenceComponent);