import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      dropdownVisible: false,
      clockwise: true,

    };
  }

    toggleDropDown = () => {
      this.setState({
        dropdownVisible: !this.state.dropdownVisible,
      });
    };

    toggleSpin = () => {
      this.setState({
        clockwise: !this.state.clockwise
      })
    }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="img-box">
            <header className="header">
              <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
              <nav className="desktop-menu">
                <span>SERVICES</span>
                <span>PORTFOLIO</span>
                <span>ABOUT</span>
                <span>TEAM</span>
                <span>CONTACT</span>
              </nav>
              <div className="dropdown" onClick={this.toggleDropDown}>
              MENU &#9776; 
          </div>
          {this.state.dropdownVisible ? (
            <nav className="mobile-menu navbar-collapse">
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </nav>
          ) : null}
            </header>
            <main className="body">
              <p className="welcome">Welcome To Our Studio!</p>
              <p className="meet">IT'S NICE TO MEET YOU</p>
              <button className="button">TELL ME MORE</button>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
