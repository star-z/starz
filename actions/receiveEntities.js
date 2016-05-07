import * as constants from '../constants';

export function receiveEntities(key, entities) {
  return {
    type: constants.RECEIVE_ENTITIES,
    key,
    entities
  }
}
