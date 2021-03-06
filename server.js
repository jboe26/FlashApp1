//require('dotenv').config();
const express = require("express");
var session = require('express-session')
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);
const routes = require("./routes");
const app = express();
const TWO_HOURS = 1000 * 60 * 60 * 2;
const SESSION_LENGTH = TWO_HOURS;
const PORT = process.env.PORT || 3001;
// const NODE_ENV = "development"
// const bodyParser = require('body-parser');
//const pino = require('express-pino-logger');

// Define middleware here
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"))
// Serve up static assets (usually on heroku)
 if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
 }


//app.use(pino);

/* app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});*/

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FlashAppDB");

//express-session settings
app.use(session({
    name: "SESS_ID",
    secret: "password",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: SESSION_LENGTH,
      sameSite: true,
      secure: false, //change to true in production, needs https to work.
    },
    //hooking up the session to my mongo database
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }))

// Add routes, both API and view
app.use('/', routes);

// Start the API server 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});