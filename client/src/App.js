import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MostTrending from './components/MostTrending';
import Videos from './components/Videos';
import MyProfile from './components/MyProfile';
import Error from './components/Error';
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        <Navbar />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Register" component={Signup}/>
             <Route path="/Login" component={Login}/>
             <Route path="/MostTrending" component={MostTrending}/>
             <Route path="/Videos" component={Videos}/>
             <Route path="/MyProfile" component={MyProfile}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;



 

