import React from 'react';
import { connect } from 'react-redux';
import BarteringComponent from './individualCivil/BarteringComponent';
import LuckyCharmComponent from './individualCivil/LuckyCharmComponent';
import PersuasionComponent from './individualCivil/PersuasionComponent';
import LoremasterComponent from './individualCivil/LoremasterComponent';
import TelekinesisComponent from './individualCivil/TelekinesisComponent';
import SneakingComponent from './individualCivil/SneakingComponent';
import ThieveryComponent from './individualCivil/ThieveryComponent';

class CivilColumn extends React.Component {

  render () {
    return (
      <div className="column">
        <div className="box">

          <h1 className="title is-4">CIVIL ABILITIES</h1>

          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-5">Points Left: </p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <p className="tag is-primary is-medium">
                  <span id="civLeft">{ this.props.civLeft }</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span id="civTotal">{ this.props.civTotal }</span>
                </p>
              </div>
            </div>
          </div>

          <BarteringComponent />
          <LuckyCharmComponent />
          <PersuasionComponent />
          <LoremasterComponent />
          <TelekinesisComponent />
          <SneakingComponent />
          <ThieveryComponent />

        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    civLeft: state.statistics.civLeft,
    civTotal: state.statistics.civTotal
  };
};

export default connect(mapStateToProps)(CivilColumn);