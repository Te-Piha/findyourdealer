import React from 'react'
import { Route } from 'react-router-dom'
// Components
import Home from './Home'
import Nav from './Nav'

const App = () => (
  <div>
    <Route path='/' component={Nav} />
    <Route path='/' component={Home} />
  </div>
)
export default App
