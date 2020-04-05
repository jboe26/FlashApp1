import React, { Component } from "react";
import "./style.css";


class LoginForm extends Component { //main is a test page to test user creation (Working)

  state = { //All the variables that will change
    userName: "",
    password: "",
  };

  handleSubmit = event => { //whenever the form is submitted
    event.preventDefault()
  }

  handleInputChange = event => { //Allows the textboxes to be used.
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            {/* <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link> */}
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h2>
                <b>Login</b> below
            </h2>
              <p className="grey-text text-darken-1">
                {/* Don't have an account? <Link to="/signup">Register</Link> */}
              </p>

              <form className="Login">
                <div className="fieldWrapper">
                  <p>Username: </p>
                  <div></div>
                  <input className="field"
                    name="userName"
                    type="text"
                    placeholder="Enter a Username"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                  />
                  <i className="user icon"></i>
                </div>
                <div className="fieldWrapper">
                  <p>Password: </p>
                  <div></div>
                  <input className="field"
                    name="password"
                    type="password"
                    placeholder="Enter a Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                  />

                </div>
                <button
                  type="submit"
                  onClick={e => this.props.handleSubmit(e, this.state.userName, this.state.password)} //when this button is clicked, it submits the form
                  className="ui big button">
                  
                  <a href="/MyProfile">Login</a>
                    </button>
              
                <div className="changeForm">
                  <a href="/Register">or Sign Up here</a>
                  <br />
                  <a href="/">Back to Home</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default LoginForm;