import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends React.Component {
  style = {
    width: '65%',
    height: '94%' }

  render () {
    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          style={this.style}
          initialCenter={{
            lat: -36.8485,
            lng: 174.7633
          }}
          zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow> */}
        </Map>
      </React.Fragment>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCh3NJRhUe_rbUikU99Cghzu6LY7qnmbcs')
})(MapContainer)
