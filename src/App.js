import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import NavBar from './NavBar'
import Content from './Content'
import Footer from './Footer'

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
