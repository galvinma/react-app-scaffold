import React from 'react'
import PropTypes from 'prop-types'

// Components
import NavBar from '../.././Components/NavBar/NavBar'

// CSS
import './Home.css'

class Home extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="content-container">
          <p>Home Page</p>
        </div>
      </div>
  )}
}

export default (Home)
