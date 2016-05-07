import * as constants from '../constants';

export function receiveMeta(key, meta) {
  return {
    type: constants.RECEIVE_META,
    key,
    meta
  }
}
