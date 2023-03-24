import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    return (
      <>
        <p>{this.props.movie.title}</p>
        <p>{this.props.movie.overview}</p>
        <p>{this.props.movie.average_votes}</p>
        <p>{this.props.movie.total_votes}</p>
        <p>{this.props.movie.image_url}</p>
        <p>{this.props.movie.popularity}</p>
        <p>{this.props.movie.released_on}</p>
      </>
      


    )
  }
}
