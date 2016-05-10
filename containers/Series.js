import React, { Component } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import { seriesSelector } from '../selectors'
import { Link } from 'react-router'

import Movie from '../components/Movie'
import List from '../components/List'

@connect(seriesSelector)
export default class Feed extends Component {

  renderSeries(series) {
    return <Movie key={`movie_${series.id}`} movie={series} />
  }

  render() {
    const { series, fetching } = this.props

    return (
      <div>
        {series.length <= 0 ?  <span>loading...</span> :
          <List items={series} renderItem={this.renderSeries.bind(this)} /> }
      </div>
    )
  }
}
