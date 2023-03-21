import React, { Component } from 'react'
import { Form, Button, Alert} from 'react-bootstrap';
import '../css/CitySearch.css'

export default class CitySearch extends Component {
  render() {
    return (
      <Form onSubmit={this.props.getCityData} >
          <Form.Group onChange={this.props.submitCity}>
            <Form.Label> Search City Name: </Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          {this.props.error && (

            <>
          <Alert variant ="danger" >
             <p>{this.props.errorMessage}</p>       
             <p>{this.props.cityName}</p>
          </Alert>
             </>
            )
            }
          <Button variant="secondary" bsPrefix="super-btn" type="submit">Explore!</Button>
        </Form>
    )
  }
}
