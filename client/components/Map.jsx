// import React from 'react'
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

// export class MapContainer extends React.Component {
//   style = {
//     width: '65%',
//     height: '94%' }

//   render () {
//     return (
//       <React.Fragment>
//         <Map
//           google={this.props.google}
//           style={this.style}
//           initialCenter={{
//             lat: -36.8485,
//             lng: 174.7633
//           }}
//           zoom={14}>

//           <Marker onClick={this.onMarkerClick}
//             name={'Current location'} />

//           {/* <InfoWindow onClose={this.onInfoWindowClose}>
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//         </InfoWindow> */}
//         </Map>
//       </React.Fragment>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyCh3NJRhUe_rbUikU99Cghzu6LY7qnmbcs')
// })(MapContainer)

import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Marker } from 'google-maps-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -36.8644882,
      lng: 174.776501
    },
    zoom: 15
  };

  render () {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCh3NJRhUe_rbUikU99Cghzu6LY7qnmbcs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <AnyReactComponent
            lat={-36.8644882}
            lng={174.776501}
            {...this.props.children}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
