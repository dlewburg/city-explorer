import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <>
      <h3>7 Day Forecast</h3>
      {this.props.weatherData.map((day, idx) => {
      return(
        <>
        <p>Today is {day.date}</p>
        
        <p>Hi of: {day.max_temp}</p>
        <p>Low of: {day.min_temp}</p>

        <p>Expected Weather: {day.description}</p>
        </>
      )
      })}
      
      </>
    )
  }

}
