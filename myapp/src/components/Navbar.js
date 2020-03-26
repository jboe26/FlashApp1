import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
          <Link
              to="/"
              style={{
                fontFamily: "ariel"
              }}
              className="col s5 brand-logo center black-text"
            >
              {/* <i className="material-icons">account_circle</i> */}
              Home <br /> <br />
            </Link>
            <Link
              to="/NewsFeed"
              style={{
                fontFamily: "ariel"
              }}
              className="col s5 brand-logo center black-text"
            >
              {/* <i className="material-icons">account_circle</i> */}
              News Feed <br /> <br />
            </Link>
            <Link
            to="/Messenger"
            style={{
              fontFamily: "ariel",
            }}
            className="col s5 brand-logo left black-text">
              {/* <i className="material-icons">newspaper</i> */}
              Messenger <br /> <br />
            </Link>
            <Link
            to="/MyProfile"
            style={{
              fontFamily: "ariel"
            }}
            className="col s5 brand-logo right black-text">
              {/* <i className="material-icons">person</i> */}
              My Profile <br /> <br />
            </Link>
          </div>
        </nav>
      </div>

      
    );

    
  }
}
export default Navbar;