import React from 'react';
import SearchBar from './SearchBar';
import './search.css';
// import Buttons from './Buttons';

const MostTrending = () => {
   return (
      <div>
         <h1>What categories are you into?</h1>
         <SearchBar />
         {/* <Buttons /> */}
         <div className="buttons"></div>
         <br />
         <h2>Top 5 Country Songs</h2>
         <br /> <br />
         <iframe width="560" height="315" src="https://www.youtube.com/embed/Y2E71oe0aSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>Dan + Shay feat. Justin Bieber: 10,000 Hours</iframe>
         <br /> <br />
         <iframe width="560" height="315" src="https://www.youtube.com/embed/gjkn7orWpeA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>LANCO: Born to Love</iframe>
         <br /> <br />
         <iframe width="560" height="315" src="https://www.youtube.com/embed/8aUzwbp_NfI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Chris Lane: I dont know about you</iframe>
         <br /> <br />
         <iframe width="560" height="315" src="https://www.youtube.com/embed/yH9w8_9cP2U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>FGL: Smooth</iframe>
         <br /> <br />
         <iframe width="560" height="315" src="https://www.youtube.com/embed/P7kqqmr2HWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Luke Combs: Even though im leaving</iframe>
      
      
      </div>
   );
}

export default MostTrending;