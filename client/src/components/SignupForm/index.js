import React, { Component } from "react";
import "./style.css";

class SignupForm extends Component {

    state = { //All the variables that will change
        userName: "",
        password: "",
        email: "",
    };

    handleFileUpload = event => {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
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
                        <div className="col s12">
                            <h2>
                                <b>Sign Up</b> below
            </h2>
                            <p className="grey-text text-darken-1">
                                {/* Don't have an account? <Link to="/signup">Register</Link> */}
                            </p>
                            <form className="Signup">
                                <input type="hidden" value="something" />
                                <div className="fieldWrapper">
                                    <p>Username</p>
                                    <div></div>
                                    <input className="field"
                                        name="userName"
                                        type="text"
                                        placeholder="Enter a Username"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="fieldWrapper">
                                    <p>Email</p>
                                    <div></div>
                                    <input className="field"
                                        name="email"
                                        type="text"
                                        placeholder="Enter your e-mail"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="fieldWrapper">
                                    <p>Password</p>
                                    <div></div>
                                    <input className="field"
                                        name="password"
                                        type="password"
                                        placeholder="Enter a password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    onClick={e => this.props.handleSignupSubmit(e, this.state.userName, this.state.password, this.state.email, this.state.selectedFile)} //when this button is clicked, it submits the form
                                    className="ui big button">
                                    
                                    <a href="/MyProfile">Sign Up</a>
                                </button>

                                <div className="changeForm">
                                    <a href="/Login">Already have an account?</a>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    };
};

export default SignupForm;
  /*
import React from "react";

const Signup = props =>{
  return(
      <form >
              <div >
                  <div >
                      <input
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={props.userName}
                      onChange={props.handleInputChange}
                      />
                      <i className="user icon"></i>
                  </div>
                  <div >
                      <input
                      name="email"
                      type="text"
                      placeholder="Email"
                      value={props.email}
                      onChange={props.handleInputChange}
                      />
                      <i className="envelope square icon"></i>
                  </div>
                  <div >
                      <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={props.password}
                      onChange={props.handleInputChange}
                      />
                      <i className="lock icon"></i>
                  </div>
                  <button
                  type="submit"
                  onClick={props.handleSignupSubmit}
                  >
                      <i className="signup icon"></i>
                      Sign Up
                  </button>
              </div>
      </form>
  )
};

export default Signup;
*/