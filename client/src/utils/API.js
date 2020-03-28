import axios from "axios";

export default {

  findCookie: function() {
    return axios.get("/api/users/cookie")
  },

  saveUser: function(userData) {
  console.log("Running Saveuser")
  console.log(userData)
    return axios.post("/api/users/signUp", userData); //makes a post of the form's data to /api/users, defined in user/routes/api/users
  },

  getUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users/login", userData);
  }

};