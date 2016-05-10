import * as constants from '../constants';
import api from '../lib/request';
import each from 'lodash/each';
import * as actions from './';
import { normalize, Schema, arrayOf } from 'normalizr'
const seriesSchema = new Schema('series')

export function fetchSeries() {
  return (dispatch, getState) => {
    dispatch(actions.receiveFetching({ series: true }))
    api.get( 'http://localhost:4000' + '/api/series').end().then(res => {
      const { body } = res
      const response = normalize(body, { series: arrayOf(seriesSchema) })
      each(response.entities, (values, key) => dispatch(actions.receiveEntities(key, values)))
      dispatch(actions.receiveMeta('seriesMeta', response.result.series))
      dispatch(actions.receiveFetching({ series: false }))
    })
  }
}
