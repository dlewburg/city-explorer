import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

export default class WeatherDay extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle>{this.props.weatherDay.date}</Dropdown.Toggle>

        <Dropdown.Menu>
          <DropdownItem>Expected Forecast: {this.props.weatherDay.description}</DropdownItem>
          <DropdownItem>Hi of: {this.props.weatherDay.max_temp} Degrees</DropdownItem>
          <DropdownItem>Low of: {this.props.weatherDay.min_temp} Degrees</DropdownItem>
        </Dropdown.Menu>  
      </Dropdown>
    )
  }
}
