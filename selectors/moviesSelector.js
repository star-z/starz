import { createSelector } from 'reselect'
import filter from 'lodash/filter'
import reverse from 'lodash/reverse'

export const moviesSelector = createSelector(
  state => state.meta.moviesMeta,
  state => state.entities.movies,
  state => state.ui.fetching,
  (moviesMeta, movies, fetching) => {
    return {
      movies,
      fetching
    }
  }
)
