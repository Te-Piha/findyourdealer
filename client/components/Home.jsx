import React from 'react'

import Location from './Location'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section className="hero is-dark is-fullheight-with-navbar">
          <div style={{ textAlign: 'center' }}>

            <img src="/images/weed.png" className="has-text-centered"/>
          </div>
          <h1 className="title is-1 has-text-grey has-text-centered">Kākāriki</h1>
          <Location />
          <progress className="progress is-small is-primary" max="100">15%</progress>
        </section>
      </React.Fragment>
    )
  }
}
export default Home
