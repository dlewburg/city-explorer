import React, { Component } from 'react'
import WeatherDay from './WeatherDay'

export default class Weather extends Component {
  render() {
    return (
      <>
      <h3>7 Day Forecast</h3>
      {this.props.weatherData.map((weatherDay, index) => <WeatherDay weatherDay={weatherDay} key={index}/>)}
      
      </>
    )
  }

}
