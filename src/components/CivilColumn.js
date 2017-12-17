import React from 'react';

const CivilColumn = () => (
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
              <span id="civLeft">1</span>
              <span>&nbsp;/&nbsp;</span>
              <span id="civTotal">1</span>
            </p>
          </div>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-6">Bartering: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="bartDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="bartering">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="bartUp">
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
            <p className="subtitle is-6">Lucky Charm:</p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="lcDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="luckyCharm">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="lcUp">
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
            <p className="subtitle is-6">Persuasion: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="perDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="persuasion">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="perUp">
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
            <p className="subtitle is-6">Loremaster: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="lmDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="loremaster">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="lmUp">
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
            <p className="subtitle is-6">Telekinesis: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="tkDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="telekinesis">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="tkUp">
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
            <p className="subtitle is-6">Sneaking: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="snkDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="sneaking">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="snkUp">
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
            <p className="subtitle is-6">Thievery: </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary is-small" id="thvDown">
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5" id="thievery">0</p>
          </div>
          <div className="level-item">
            <button className="button is-primary is-small" id="thvUp">
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

export default CivilColumn;