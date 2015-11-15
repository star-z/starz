import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  friends: [ 
    {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    {
      id: 2,
      name: 'Abraham Lincoln'
    },
    {
      id: 3,
      name: 'George Washington'
    }
  ]
}

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newFriend = {
        id: state.friends.length + 1,
        name: action.name
      }
      return {
        ...state,
        friends: state.friends.concat(newFriend)
      }

    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: omit(state.friendsById, action.id)
      }

    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: mapValues(state.friendsById, (friend) => {
          return friend.id === action.id ?
            assign({}, friend, { starred: !friend.starred }) :
            friend
        })
      }

    default:
      return state;
  }
}
