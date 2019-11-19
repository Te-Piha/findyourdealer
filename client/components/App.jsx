import React from 'react'
import { Route } from 'react-router-dom'
// Components
import Home from './Home'
import Nav from './Nav'
import MapPage from './MapPage'
// import Footer from './Footer'
const App = () => (
  <div>
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Home} />
    <Route exact path='/map' component={MapPage} />
    {/* <Route path='/' component={Footer}/> */}

  </div>
)
export default App
