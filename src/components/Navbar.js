import React from 'react';
import { connect } from 'react-redux';
import { resetBuild } from '../actions/statisticsActions';

class Navbar extends React.Component {

  resetBuild = () => {
    this.props.resetBuild();
  };

  render () {
    return (
      <nav className="navbar is-dark">
        <div className="container">

          <div className="navbar-brand">
            <NavbarBurger />
          </div>

          <div className="navbar-menu" id="navMenuPlanner">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" target="_blank" href="http://divinityoriginalsin2.wiki.fextralife.com/Divinity+Original+Sin+2+Wiki">Wiki</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item" target="_blank" href="http://divinityoriginalsin2.wiki.fextralife.com/Attributes">Attributes</a>
                  <a className="navbar-item" target="_blank" href="http://divinityoriginalsin2.wiki.fextralife.com/Abilities">Abilities</a>
                  <a className="navbar-item" target="_blank" href="http://divinityoriginalsin2.wiki.fextralife.com/Talents">Talents</a>
                  <a className="navbar-item" target="_blank" href="http://divinityoriginalsin2.wiki.fextralife.com/Skills">Skills</a>
                </div>
              </div>
              <a className="navbar-item" target="_blank" href="http://larian.com/forums/ubbthreads.php?ubb=cfrm&c=18">Official Forums</a>
              <a className="navbar-item" target="_blank" href="https://github.com/ek1506/dos2-character-planner-react">Github</a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <p className="control">
                  <button className="button is-danger has-text-weight-semibold" id="resetButton" onClick={ this.resetBuild }>Reset Build</button>
                </p>
              </div>
            </div>
          </div>

        </div>
      </nav>
    );
  };
};

class NavbarBurger extends React.Component {

  // NAVBAR BURGER MENU SCRIPT
  componentDidMount() {
    let navbarBurgersArray = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    if (navbarBurgersArray.length > 0) {

      navbarBurgersArray.forEach(function (e) {
        e.addEventListener("click", function() {
          
          // Get the target from the "data-target" attribute
          let target = e.dataset.target;
          let domTarget = document.getElementById(target);

          // Toggle the class on both the ".navbar-burger" and the ".navbar-menu"
          e.classList.toggle("is-active");
          domTarget.classList.toggle("is-active");
        });
      });
    };
  };

  render() {
    return (
      <button className="button navbar-burger is-primary is-radiusless" data-target="navMenuPlanner">
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetBuild: () => dispatch(resetBuild())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);