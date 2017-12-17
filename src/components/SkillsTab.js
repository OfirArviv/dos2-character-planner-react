import React from 'react';

const SkillsTab = () => (
  <div className="tab">
    <input className="accordion" id="tab-three" type="checkbox" name="tabs" />
    <label className="accordion" htmlFor="tab-three">Skills</label>
    <div className="tab-content">

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Aerotheurge: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="aeroDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="aerotheurge">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="aeroUp">
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
            <p className="subtitle is-6">Geomancer: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="geoDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="geomancer">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="geoUp">
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
            <p className="subtitle is-6">Huntsman: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="huntDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="huntsman">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="huntUp">
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
            <p className="subtitle is-6">Hydrosophist: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="hydroDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="hydrosophist">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="hydroUp">
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
            <p className="subtitle is-6">Necromancer: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="necroDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="necromancer">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="necroUp">
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
            <p className="subtitle is-6">Polymorph: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="polyDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="polymorph">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="polyUp">
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
            <p className="subtitle is-6">Pyrokinetic: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="pyroDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="pyrokinetic">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="pyroUp">
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
            <p className="subtitle is-6">Scoundrel: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="scounDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="scoundrel">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="scounUp">
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
            <p className="subtitle is-6">Summoning: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="sumDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="summoning">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="sumUp">
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
            <p className="subtitle is-6">Warfare: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="warDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="warfare">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="warUp">
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

export default SkillsTab;