import React from 'react';
import SearchBar from './SearchBar';
import './search.css';
import {
   Route,
   NavLink,
   HashRouter
} from "react-router-dom";
import CountrySongs from './CountrySongs';
import ChristianSongs from './ChristianSongs';
import PopSongs from './PopSongs';
import HipHopSongs from './HipHopSongs';


const MostTrending = () => {
   return (
      <div>
         <h1>What categories are you into?</h1>
         <SearchBar />
         <div className="buttons"></div>
         <br />
         <HashRouter>
            <div>
               <ul className="header">
                  <NavLink to="/CountrySongs"> Country </NavLink>
                  <NavLink to="/HipHopSongs"> Hip Hop </NavLink>
                  <NavLink to="/ChristianSongs"> Christian </NavLink>
                  <NavLink to="/PopSongs"> Pop </NavLink>
               </ul>
               <div className="content">
                  <Route path="/CountrySongs" component={CountrySongs} />
                  <Route path="/HipHopSongs" component={HipHopSongs} />
                  <Route path="/ChristianSongs" component={ChristianSongs} />
                  <Route path="/PopSongs" component={PopSongs} />
               </div>
            </div>
         </HashRouter>


      </div>
   );
}

export default MostTrending;