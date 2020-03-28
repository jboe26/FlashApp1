import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NewsFeed from './components/NewsFeed';
import Messenger from './components/Messenger';
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
             <Route path="/NewsFeed" component={NewsFeed}/>
             <Route path="/Messenger" component={Messenger}/>
             <Route path="/MyProfile" component={MyProfile}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;



 

