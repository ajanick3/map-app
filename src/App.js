// https://react-leaflet.js.org/docs/en/examples.html
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class SimpleExample extends Component {
  state = {
    location: {
      latitude: 51.505,
      longitude: -0.09,
    },
    zoom: 5,
  }

  componentDidMount = () => {
    this.setUserLocation()
  }

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('position:', position)
      // coords: {
      //   accuracy: 20
      //   altitude: null
      //   altitudeAccuracy: null
      //   heading: null
      //   latitude: 44.7562018
      //   longitude: -85.7277294
      //   speed: null
      //   timestamp: 1553055706657
      // }
      this.setState({
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      })
    })
  }

  render() {
    const position = [
      this.state.location.latitude,
      this.state.location.longitude,
    ]
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
