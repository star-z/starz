import React, { Component } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import { moviesSelector } from '../selectors'
import { Link } from 'react-router'

import Movie from '../components/Movie'
import List from '../components/List'

@connect(moviesSelector)
export default class Feed extends Component {

  renderMovie(movie) {
    return <Movie key={`movie_${movie.id}`} movie={movie} />
  }

  render() {
    const { movies, fetching } = this.props

    return (
      <div>
        {movies.length <= 0 ?  <span>loading...</span> :
          <List items={movies} renderItem={this.renderMovie.bind(this)} /> }
      </div>
    )
  }
}
