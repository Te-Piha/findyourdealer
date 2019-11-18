import React from 'react'
import { Route } from 'react-router-dom'
// Components
import Home from './Home'
import Nav from './Nav'
import MapPage from './MapPage'

const App = () => (
  <div>
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Home} />
    <Route exact path='/map' component={MapPage} />
  </div>
)
export default App
