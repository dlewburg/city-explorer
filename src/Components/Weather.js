import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <>
      <h3>7 Day Forecast</h3>
      {this.props.weatherData.map((day, idx) => {
      return(
        <>
        <p>{day.date}</p>
        <p>{day.description}</p>
        </>
      )
      })}
      
      </>
    )
  }
}
