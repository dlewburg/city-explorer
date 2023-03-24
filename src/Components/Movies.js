import React, { Component } from 'react'
import Movie from './Movie'
import { Alert } from 'react-bootstrap'


export default class Movies extends Component {
  render() {
    if (this.props.movieData.length === 0){
      return (
        <Alert variant="danger">
          <p>{this.props.errorMessage}</p>
        </Alert>
      )

    }

    return (
      <>
        <h3>Movies Related to {this.props.cityName}</h3>

        {this.props.movieData.map((movie, index) => <Movie movie={movie} key={index} errorMessage={this.props.errorMessage}/>)}
          

      </> 
      
    )
  }
}
