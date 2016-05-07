import { createSelector } from 'reselect'
import map from 'lodash/map'
import filter from 'lodash/filter'
import get from 'lodash/get'
import reverse from 'lodash/reverse'

export const reviewsSelector = createSelector(
  state => state.meta.reviewsMeta,
  state => state.entities.reviews,
  state => state.ui.fetching,
  (reviewsMeta, reviews, fetching) => {
    return {
      reviews,
      fetching
    }
  }
)
