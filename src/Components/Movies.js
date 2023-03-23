import React, { Component } from 'react'

export default class Movies extends Component {
  render() {
    return (
      <>
        <h3>Movies Related to {this.props.cityName}</h3>
        {this.props.movieData.map((movie, idx) => {
          return (
            <>
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            <p>{movie.average_votes}</p>
            <p>{movie.total_votes}</p>
            <p>{movie.image_url}</p>
            <p>{movie.popularity}</p>
            <p>{movie.released_on}</p>
            </>
          )
        })}
      </>
    )
  }
}
