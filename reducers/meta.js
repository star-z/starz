import * as constants from '../constants'
const initialState = {
  moviesMeta: [],
  reviewsMeta: []
}

export default function (state = initialState, action) {
  switch (action.type) {

    case constants.RECEIVE_META:
      var { key, meta } = action
      return {
        ...state,
        [key]: meta
      }
      break;

    default:
      return state
  }
}
