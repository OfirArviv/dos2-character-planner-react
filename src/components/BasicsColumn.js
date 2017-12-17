import React from 'react';
import { connect } from 'react-redux';
import { changeRace, changeGender, changeOrigin } from '../actions/basicsActions';

class BasicsColumn extends React.Component {

  changeRace = (e) => {
    this.props.changeRace(e.target.value);
  }

  changeGender = (e) => {
    this.props.changeGender(e.target.value);
  }

  changeOrigin = (e) => {
    this.props.changeOrigin(e.target.value);
  }

  render () {
    return (
      <div className="column is-narrow">
        <div className="box">

          <h1 className="title is-4">BASICS</h1>

          <div className="field">
            <label className="label">Race:</label>
            <div className="control">
              <div className="select">
                <select id="race"
                  onChange={ this.changeRace }
                  disabled={ this.props.origin === "custom" ? false : true }
                  value={ this.props.race }
                >
                  <option value="human">Human</option>
                  <option value="dwarf">Dwarf</option>
                  <option value="elf">Elf</option>
                  <option value="lizard">Lizard</option>
                  <option value="undeadhuman">Undead Human</option>
                  <option value="undeaddwarf">Undead Dwarf</option>
                  <option value="undeadelf">Undead Elf</option>
                  <option value="undeadlizard">Undead Lizard</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Gender:</label>
            <div className="control">
              <div className="select">
                <select id="gender"
                  onChange={ this.changeGender }
                  disabled={ this.props.origin === "custom" ? false : true }
                  value={ this.props.gender }
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Origin:</label>
            <div className="control">
              <div className="select">
                <select id="origin"
                  onChange={ this.changeOrigin }
                  value={ this.props.origin }
                >
                  <option value="custom">Custom</option>
                  <option value="fane">Fane</option>
                  <option value="redprince">Red Prince</option>
                  <option value="ifan">Ifan Ben-Mezd</option>
                  <option value="lohse">Lohse</option>
                  <option value="sebille">Sebille</option>
                </select>
              </div>
            </div>
          </div>

          <img id="portrait" src={`/images/${this.props.race}${this.props.gender}${this.props.origin}.png`} />

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    race: state.race,
    gender: state.gender,
    origin: state.origin
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeRace: (race) => dispatch(changeRace(race)),
  changeGender: (gender) => dispatch(changeGender(gender)),
  changeOrigin: (origin) => dispatch(changeOrigin(origin))
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicsColumn);