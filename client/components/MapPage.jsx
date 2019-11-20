import React from 'react'
import Map from './Map'
import Listing from './Listing'
import Marker from './Marker'
import { getUsers } from '../api/index'
class MapPage extends React.Component {
  state = {
    users: []
  }

  componentDidMount () {
    this.fetchPosts()
  }

  fetchPosts () {
    return getUsers()
      .then(users => {
        this.setState({ users: users })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }

  render () {
    return (
      <React.Fragment>
        <section className="hero is-dark is-fullheight-with-navbar">
          <div className="columns">

            <div className="column is-two-thirds is-link">
              <Map >
                <Marker
                  lat={-36.8644882}
                  lng={174.776501}/>
              </Map>

            </div>

            <div className="column">
              <section>
                <Listing users={this.state.users}/>
              </section>
            </div>
          </div>

        </section>
      </React.Fragment>
    )
  }
}

export default MapPage
