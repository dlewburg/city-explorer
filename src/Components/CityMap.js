import React, { Component } from 'react'
import '../css/CityMap.css'
import Card from 'react-bootstrap/Card'

export default class CityMap extends Component {
  render() {
    return (


      <Card>
        <Card.Body>
        <Card.Title>{this.props.cityName}</Card.Title>
        <Card.Text>Latitude: {this.props.cityLat}, Longitude: {this.props.cityLong}</Card.Text>
        <Card.Img variant="top" src={this.props.mapUrl} alt={this.props.cityName}/>
        </Card.Body>
      </Card>
    )
  }
}
