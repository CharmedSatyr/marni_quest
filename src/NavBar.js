import React from 'react'
import { Link } from 'react-router-dom'

import logo from './img/D&D Transparent.png'
import muffin from './img/muffin.png'

const NavBar = () => (
  <nav>
    <div className="nav-title">
      <img alt="muffin" className="muffin" src={muffin} />
      <h1>Marni's Quest</h1>
    </div>
    <div className="nav-links">
      <div className="nav-link">
        <Link to="/">Overview</Link>
      </div>
      <div className="nav-link">
        <Link to="/characters">Characters</Link>
      </div>
      <div className="nav-link">
        <Link to="/settings">Settings</Link>
      </div>
      <div className="nav-link">
        <Link to="/rewards">Rewards</Link>
      </div>
      <div>
        <Link to="/decisions">Decisions</Link>
      </div>
    </div>
    <div className="nav-logo">
      A <img alt="D&D Logo" src={logo} /> Homebrew
    </div>
  </nav>
)

export default NavBar
