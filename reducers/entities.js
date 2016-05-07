import * as constants from '../constants'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import each from 'lodash/each'

const initialState = {
  movies: {},
  users: {},
  reviews: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    case constants.RECEIVE_ENTITIES:
      var { key, entities } = action
      return {
        ...state,
        [key]: Object.assign({}, state[key], entities)
      }
      break;

    default:
      return state
  }
}
