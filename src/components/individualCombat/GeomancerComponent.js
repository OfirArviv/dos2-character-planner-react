import React from 'react';
import { connect } from 'react-redux';
import { geomancerUp, geomancerDown } from '../../actions/statisticsActions';

class GeomancerComponent extends React.Component {

  isGeomancerDownPossible = () => {
    if (this.props.geomancer > 0) { return true }
    else if (this.props.geomancer === 10) { return false }
  }

  isGeomancerUpPossible = () => {
    if (this.props.comLeft === 0) { return false }
    else if (this.props.geomancer === 10) { return false }
    else { return true }
  }

  geomancerUp = () => {
    this.props.geomancerUp();
  };

  geomancerDown = () => {
    this.props.geomancerDown();
  };

  render () {
    return (
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Geomancer: </p>
          </div>
        </div>
        <div className="level-right">
          { this.isGeomancerDownPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="geomancerDown" onClick={ this.geomancerDown }>
                    <span className="icon is-small">
                      <i className="fa fa-minus"></i>
                    </span>
              </button>
            </div>
          : null }
          <div className="level-item">
            <p className="subtitle is-5" id="geomancer">{ this.props.geomancer }</p>
          </div>
          { this.isGeomancerUpPossible() ? 
            <div className="level-item">
              <button className="button is-primary is-small" id="geomancerUp" onClick={ this.geomancerUp }>
                    <span className="icon is-small">
                      <i className="fa fa-plus"></i>
                    </span>
              </button>
            </div>
          :
            <div className="level-item">
              <button className="button is-primary is-small" id="geomancerUpInvisible">
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
    geomancer: state.statistics.geomancer
  };
};

const mapDispatchToProps = (dispatch) => ({
  geomancerUp: () => dispatch(geomancerUp()),
  geomancerDown: () => dispatch(geomancerDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(GeomancerComponent);