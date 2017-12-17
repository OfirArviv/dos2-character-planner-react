import React from 'react';
import { connect } from 'react-redux';

const AttributesColumn = (props) => (
  <div className="column">
    <div className="box">

      <h1 className="title is-4">ATTRIBUTES</h1>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">Points Left: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <p className="tag is-primary is-medium">
              <span id="attrLeft">3</span>
              <span>&nbsp;/&nbsp;</span>
              <span id="attrTotal">3</span>
            </p>
          </div>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">Level: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item" id="decLevelDiv">
            <button className="button is-primary is-small" id="levelDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="level">1</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="levelUp">
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
            </button>
          </div>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Strength: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="strDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="strength">10</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="strUp">
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
            </button>
          </div>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Intelligence: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="intDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="intelligence">10</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="intUp">
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
            </button>
          </div>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Finesse: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="finDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="finesse">10</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="finUp">
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
            </button>
          </div>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Constitution: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="conDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="constitution">10</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="conUp">
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
            </button>
          </div>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Memory: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="memDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="memory">10</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="memUp">
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
            </button>
          </div>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Wits: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="witsDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="wits">10</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="witsUp">
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
            </button>
          </div>
        </div>
      </div>

      <p>{props.gender}</p>

    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    gender: state.gender
  };
};

export default connect(mapStateToProps)(AttributesColumn);