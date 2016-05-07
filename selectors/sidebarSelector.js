import { createSelector } from 'reselect'
import map from 'lodash/map'
import get from 'lodash/get'

export const sidebarSelector = createSelector(
  state => state.ui.fetching,
  state => state.meta.moviesMeta,
  state => state.entities.movies,
  state => state.meta.reviewsMeta,
  state => state.entities.reviews,
  (fetching, moviesMeta, movies, reviewsMeta, reviews) => {

    return {
      fetching,
      reviews,
      movies
    }
  }
);
