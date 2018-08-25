import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import * as content from './Content'
import logo from './D&D Transparent.png'
import muffin from './muffin.png'

/*
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
  </div>
)
*/

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
        <Link to="/mechanics">Mechanics</Link>
      </div>
      <div className="nav-link">
        <Link to="/outcomes">Outcomes</Link>
      </div>
      <div className="nav-link">
        <Link to="/rewards">Rewards</Link>
      </div>
      {/* <div>
          <Link to="/topics">Topics</Link>
        </div> */}
    </div>
    <div className="nav-logo">
      A <img alt="D&D Logo" src={logo} /> Homebrew
    </div>
  </nav>
)

const Content = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={content.Overview} />
      <Route path="/characters" component={content.Characters} />
      <Route path="/settings" component={content.Settings} />
      <Route path="/mechanics" component={content.Mechanics} />
      <Route path="/outcomes" component={content.Outcomes} />
      <Route path="/rewards" component={content.Rewards} />
      {/* <Route path="/topics" component={Topics} /> */}
    </Switch>
  </div>
)

const Footer = () => (
  <footer>
    <p>
      Made with <span className="heart">&#9829;</span> by{' '}
      <a href="https://github.com/CharmedSatyr" rel="noreferrer noopener" target="_blank">
        CharmedSatyr
      </a>
    </p>
    <p>
      The original content of this project is licensed under the{' '}
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/legalcode"
        rel="noreferrer noopener"
        target="_blank"
      >
        Creative Commons Attribution Share Alike 4.0 International
      </a>{' '}
      license, and the underlying source code used to format and display that content is licensed
      under the{' '}
      <a
        href="https://www.gnu.org/licenses/gpl-3.0.en.html"
        rel="noreferrer noopener"
        target="_blank"
      >
        GNU General Public License v3.0
      </a>
      .
    </p>
    <p>
      Dungeons &amp; Dragons, D&amp;D, their respective logos, and all Wizards titles and characters
      are property of Wizards of the Coast LLC in the U.S.A. and other countries. ©2018 Wizards.
    </p>
  </footer>
)

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Content />
      <Footer />
    </div>
  </Router>
)

export default App
