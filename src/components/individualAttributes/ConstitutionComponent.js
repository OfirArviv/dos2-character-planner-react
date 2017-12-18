import React from 'react';
import { connect } from 'react-redux';
import { constitutionUp, constitutionDown } from '../../actions/statisticsActions';

class ConstitutionComponent extends React.Component {

  isConstitutionDownPossible = () => {
    if (this.props.constitution > 10) { return true }
    else if (this.props.constitution === 10) { return false }
  }
  
  isConstitutionUpPossible = () => {
    if (this.props.attrLeft === 0) { return false }
    else if (this.props.constitution === 40) { return false }
    else { return true }
  }

  constitutionUp = () => {
    this.props.constitutionUp();
  };

  constitutionDown = () => {
    this.props.constitutionDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Constitution: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isConstitutionDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="conDown" onClick={ this.constitutionDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="constitution">{ this.props.constitution }</p>
          </div>
          { this.isConstitutionUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="conUp" onClick={ this.constitutionUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="conUpInvisible">
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
    constitution: state.statistics.constitution
  };
};

const mapDispatchToProps = (dispatch) => ({
  constitutionUp: () => dispatch(constitutionUp()),
  constitutionDown: () => dispatch(constitutionDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConstitutionComponent);