import React from 'react';

const WeaponsTab = () => (
  <div className="tab">
    <input className="accordion" id="tab-one" type="checkbox" name="tabs" />
    <label className="accordion" htmlFor="tab-one">Weapons</label>
    <div className="tab-content">
          
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Dual Wielding: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="dwDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="dualWielding">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="dwUp">
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
            <p className="subtitle is-6">Ranged: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="rngDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="ranged">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="rngUp">
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
            <p className="subtitle is-6">Single-Handed: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="shDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="singleHanded">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="shUp">
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
            <p className="subtitle is-6">Two-Handed: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="thDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="twoHanded">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="thUp">
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default WeaponsTab;