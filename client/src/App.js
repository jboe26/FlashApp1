import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './components/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MostTrending from './components/MostTrending';
import Videos from './components/Videos';
import MyProfile from './components/MyProfile';



class App extends Component {
  render() {
    return (
      
      <HashRouter>
        <div>
  
          <ul className="header">
           <NavLink to="/"><i className="material-icons">home</i> Home  </NavLink>
           <NavLink to="/MostTrending"><i className="material-icons">trending_up</i> Most Trending  </NavLink>
           <NavLink to="/Videos"><i className="material-icons">videocam</i> Videos  </NavLink>
           <NavLink to="/MyProfile"><i className="material-icons">person</i> My Profile  </NavLink>
          </ul>
          <h1>Welcome to Pulse Points <i className="material-icons">videocam</i></h1>
          <div className="content">
          <Route path="/" component={Home} exact/>
              <Route path="/Register" component={Signup}/>
              <Route path="/Login" component={Login}/>
              <Route path="/MostTrending" component={MostTrending}/>
              <Route path="/Videos" component={Videos}/>
              <Route path="/MyProfile" component={MyProfile}/>
    
          </div>
        </div>
        </HashRouter>
      //  <BrowserRouter>
      //   <div>
      //   <Navbar />
      //       <Switch>
      //        <Route path="/" component={Home} exact/>
      //        <Route path="/Register" component={Signup}/>
      //        <Route path="/Login" component={Login}/>
      //        <Route path="/MostTrending" component={MostTrending}/>
      //        <Route path="/Videos" component={Videos}/>
      //        <Route path="/MyProfile" component={MyProfile}/>
      //       <Route component={Error}/>
      //      </Switch>
      //   </div> 
      // </BrowserRouter>
    );
  }
}
 
export default App;



 

