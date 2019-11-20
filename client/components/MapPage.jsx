import React from 'react'
import Map from './Map'
import Listing from './Listing'
import Marker from './Marker'

class MapPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section className="hero is-dark is-fullheight-with-navbar">
          <div className="columns">

            <div className="column is-two-thirds is-link">
              <Map >
                <Marker />
              </Map>

            </div>

            <div className="column">
              <section>
                <Listing />
              </section>
            </div>
          </div>

        </section>
      </React.Fragment>
    )
  }
}

export default MapPage
