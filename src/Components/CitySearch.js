import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap';

export default class CitySearch extends Component {
  render() {
    return (
      <Form onSubmit={this.props.getCityData}>
          <Form.Group onChange={this.props.submitCity}>
            <Form.Label> Enter City: </Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Button type='submit'>Explore!</Button>
        </Form>
    )
  }
}
