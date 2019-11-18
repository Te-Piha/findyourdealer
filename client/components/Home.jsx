import React from 'react'

import Location from './Location'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section className="hero is-dark is-fullheight">
          <Location />
        </section>
      </React.Fragment>
    )
  }
}
export default Home
