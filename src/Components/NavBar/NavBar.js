import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './NavBar.css'

class NavBar extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {

    return (
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-left-entries">
            <Link to="/" className="linkStyle">Left</Link>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-entries">
            <Link to="/" className="linkStyle">Right</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default (NavBar)
