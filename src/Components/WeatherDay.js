import React, { Component } from 'react'

export default class WeatherDay extends Component {
  render() {
    return (
      <div> 
        <p>Day: {this.props.weatherDay.date}</p>
        
        <p>Hi of: {this.props.weatherDay.max_temp}</p>
        <p>Low of: {this.props.weatherDay.min_temp}</p>

        <p>Expected Weather: {this.props.weatherDay.description}</p>
      </div>
    )
  }
}
