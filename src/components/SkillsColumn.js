import React from 'react';
import { connect } from 'react-redux';

class SkillsColumn extends React.Component {

  render () {
    return (
      <div className="column">
        <div className="box" id="skillBox">

          <h1 className="title is-4">AVAILABLE SKILLS</h1>

          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-5">Memory Slots: </p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div className="tag is-primary is-medium" id="memoryTag">
                  <span id="memTotal">{ this.props.memTotal }</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tags" id="tagWrapper">
            <span className="tag is-primary" id="racialSkill">Racial Skill</span>
            <span className="tag is-primary" id="originSkill">Origin Skill</span>
            { this.props.aerotheurge >= 1 ? <span className="tag aero" id="aeroT1">Aero - Tier 1</span> : null }
            { this.props.aerotheurge >= 2 ? <span className="tag aero" id="aeroT2">Aero - Tier 2</span> : null }
            { this.props.aerotheurge >= 3 ? <span className="tag aero" id="aeroT3">Aero - Tier 3</span> : null }
            { this.props.aerotheurge >= 5 ? <span className="tag aero" id="aeroT4">Aero - Tier 4</span> : null }
            { this.props.geomancer >= 1 ? <span className="tag geo" id="geoT1">Geo - Tier 1</span> : null }
            { this.props.geomancer >= 2 ? <span className="tag geo" id="geoT2">Geo - Tier 2</span> : null }
            { this.props.geomancer >= 3 ? <span className="tag geo" id="geoT3">Geo - Tier 3</span> : null }
            { this.props.geomancer >= 5 ? <span className="tag geo" id="geoT4">Geo - Tier 4</span> : null }
            { this.props.huntsman >= 1 ? <span className="tag hunt" id="huntT1">Hunt - Tier 1</span> : null }
            { this.props.huntsman >= 2 ? <span className="tag hunt" id="huntT2">Hunt - Tier 2</span> : null }
            { this.props.huntsman >= 3 ? <span className="tag hunt" id="huntT3">Hunt - Tier 3</span> : null }
            { this.props.huntsman >= 5 ? <span className="tag hunt" id="huntT4">Hunt - Tier 4</span> : null }
            { this.props.hydrosophist >= 1 ? <span className="tag hydro" id="hydroT1">Hydro - Tier 1</span> : null }
            { this.props.hydrosophist >= 2 ? <span className="tag hydro" id="hydroT2">Hydro - Tier 2</span> : null }
            { this.props.hydrosophist >= 3 ? <span className="tag hydro" id="hydroT3">Hydro - Tier 3</span> : null }
            { this.props.hydrosophist >= 5 ? <span className="tag hydro" id="hydroT4">Hydro - Tier 4</span> : null }
            { this.props.necromancer >= 1 ? <span className="tag necro" id="necroT1">Necro - Tier 1</span> : null }
            { this.props.necromancer >= 2 ? <span className="tag necro" id="necroT2">Necro - Tier 2</span> : null }
            { this.props.necromancer >= 3 ? <span className="tag necro" id="necroT3">Necro - Tier 3</span> : null }
            { this.props.necromancer >= 4 ? <span className="tag necro" id="necroT4">Necro - Tier 4</span> : null }
            { this.props.polymorph >= 1 ? <span className="tag poly" id="polyT1">Poly - Tier 1</span> : null }
            { this.props.polymorph >= 2 ? <span className="tag poly" id="polyT2">Poly - Tier 2</span> : null }
            { this.props.polymorph >= 3 ? <span className="tag poly" id="polyT3">Poly - Tier 3</span> : null }
            { this.props.polymorph >= 5 ? <span className="tag poly" id="polyT4">Poly - Tier 4</span> : null }
            { this.props.pyrokinetic >= 1 ? <span className="tag pyro" id="pyroT1">Pyro - Tier 1</span> : null }
            { this.props.pyrokinetic >= 2 ? <span className="tag pyro" id="pyroT2">Pyro - Tier 2</span> : null }
            { this.props.pyrokinetic >= 3 ? <span className="tag pyro" id="pyroT3">Pyro - Tier 3</span> : null }
            { this.props.pyrokinetic >= 5 ? <span className="tag pyro" id="pyroT4">Pyro - Tier 4</span> : null }
            { this.props.scoundrel >= 1 ? <span className="tag scoun" id="scounT1">Scoun - Tier 1</span> : null }
            { this.props.scoundrel >= 2 ? <span className="tag scoun" id="scounT2">Scoun - Tier 2</span> : null }
            { this.props.scoundrel >= 3 ? <span className="tag scoun" id="scounT3">Scoun - Tier 3</span> : null }
            { this.props.scoundrel >= 5 ? <span className="tag scoun" id="scounT4">Scoun - Tier 4</span> : null }
            { this.props.summoning >= 1 ? <span className="tag sum" id="sumT1">Sum - Tier 1</span> : null }
            { this.props.summoning >= 2 ? <span className="tag sum" id="sumT2">Sum - Tier 2</span> : null }
            { this.props.summoning >= 3 ? <span className="tag sum" id="sumT3">Sum - Tier 3</span> : null }
            { this.props.summoning >= 5 ? <span className="tag sum" id="sumT4">Sum - Tier 4</span> : null }
            { this.props.warfare >= 1 ? <span className="tag war" id="warT1">War - Tier 1</span> : null }
            { this.props.warfare >= 2 ? <span className="tag war" id="warT2">War - Tier 2</span> : null }
            { this.props.warfare >= 3 ? <span className="tag war" id="warT3">War - Tier 3</span> : null }
            { this.props.warfare >= 5 ? <span className="tag war" id="warT4">War - Tier 4</span> : null }
          </div>

          <div className="level is-mobile" id="skill-tooltips-level">
            <div className="level-left">
              <div className="level-item">
                <a className="link" id="skill-tooltips" target="_blank" href=
                "http://divinityoriginalsin2.wiki.fextralife.com/All+Skills">
                  (Tooltip description of each skill).
                </a>
              </div>
            </div>
            <div className="level-right">
            </div>
          </div>

        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    memTotal: state.statistics.memTotal,
    aerotheurge: state.statistics.aerotheurge,
    geomancer: state.statistics.geomancer,
    huntsman: state.statistics.huntsman,
    hydrosophist: state.statistics.hydrosophist,
    necromancer: state.statistics.necromancer,
    polymorph: state.statistics.polymorph,
    pyrokinetic: state.statistics.pyrokinetic,
    scoundrel: state.statistics.scoundrel,
    summoning: state.statistics.summoning,
    warfare: state.statistics.warfare
  };
};

export default connect(mapStateToProps)(SkillsColumn);