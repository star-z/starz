import { createSelector } from 'reselect'
import filter from 'lodash/filter'
import reverse from 'lodash/reverse'

export const seriesSelector = createSelector(
  state => state.meta.seriesMeta,
  state => state.entities.series,
  state => state.ui.fetching,
  (moviesMeta, series, fetching) => {
    return {
      series,
      fetching
    }
  }
)
