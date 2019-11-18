import React from 'react'
import Map from './Map'

class MapPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section className="hero is-dark is-fullheight">
          <Map />
        </section>
      </React.Fragment>
    )
  }
}
export default MapPage
