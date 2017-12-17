import React from 'react';

const DefenseTab = () => (
  <div className="tab">
    <input className="accordion" id="tab-two" type="checkbox" name="tabs" />
    <label className="accordion" htmlFor="tab-two">Defense</label>
    <div className="tab-content">

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Leadership: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="ldrDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="leadership">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="ldrUp">
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
            <p className="subtitle is-6">Perseverance: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="psvDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="perseverance">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="psvUp">
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
            <p className="subtitle is-6">Retribution: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="retDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="retribution">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="retUp">
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

export default DefenseTab;