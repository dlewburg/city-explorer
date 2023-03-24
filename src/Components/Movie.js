import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'

export default class Movie extends Component {
  render() {
    return (
      <>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{this.props.movie.title}</Accordion.Header>
            <AccordionBody>
              <p>Overview: {this.props.movie.overview}</p>
              <img scr={this.props.movie.image_url} alt={this.props.movie.title} movie cover/>
              <p><span>Avg Votes: {this.props.movie.average_votes}</span> <span>Total Votes: {this.props.movie.total_votes}</span></p>
              <p><span>Released: {this.props.movie.released_on}</span> <span>Popularity: {this.props.movie.popularity}</span></p>
            </AccordionBody>
          </Accordion.Item>


        </Accordion>

      </>



    )
  }
}
