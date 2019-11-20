import React from 'react'

import Location from './Location'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section className="hero is-dark is-fullheight-with-navbar">
          <figure className="image is-128x128">
            <img src="/images/weed.png" className="text-is-centerd"/>
          </figure>
          <Location />
        </section>
      </React.Fragment>
    )
  }
}
export default Home
