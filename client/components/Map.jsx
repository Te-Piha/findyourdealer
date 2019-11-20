import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Marker } from 'google-maps-react'

// const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -36.8644882,
      lng: 174.776501
    },
    zoom: 15
  }

  render () {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '94vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCh3NJRhUe_rbUikU99Cghzu6LY7qnmbcs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          {this.props.children}

        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
