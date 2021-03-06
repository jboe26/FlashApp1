import React, { Component } from "react";
import SignupForm from "../components/SignupForm";
// import Navbar from "../components/Navbar";
// import NavbarLink from "../components/NavbarLink";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

class Signup extends Component {

state = {
  returnedName: "",
  returnedEmail: ""
}

checkForUser = () => {
  console.log("checkForUser")
  API.findCookie()
.then(res => {
  this.setState({
    returnedName: res.data.userName,
    returnedEmail: res.data.email
  });
})
.catch(err => console.log(err));
}

/*componentDidMount(){
  this.checkForUser()
}*/

handleSignupSubmit = (event, userName, password, email, file) => { //whenever the form is submitted

//event.preventDefault()
if (userName && password) { //if the 2 required areas are filled out, run this, email is not required
console.log("posted") //log them
API.saveUser({ //call saveUser from ../utils/API
userName, //insert the 3 data areas to saveUser
password,
email
})
.then(res => {
  console.log(res.data)
  this.setState({
    returnedName: res.data.dbModel[0].userName,
    returnedEmail: res.data.dbModel[0].email
  });
})
.catch(err => console.log(err));
}
};

render() {
  return (
    <Wrapper>
        {this.state.returnedName}
     <SignupForm
     handleSignupSubmit = {this.handleSignupSubmit}
     ></SignupForm>
    </Wrapper>
  );
}
}

export default Signup;