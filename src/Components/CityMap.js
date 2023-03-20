import React, { Component } from 'react'

export default class CityMap extends Component {
  render() {
    return (


      <div><h2>City Map</h2>
        <p>{this.props.cityName}</p>
        <img src={this.props.mapUrl} alt={this.props.cityName}></img>
        <p>{this.props.cityLong} {this.props.cityLat}</p>
      </div>
    )
  }
}
