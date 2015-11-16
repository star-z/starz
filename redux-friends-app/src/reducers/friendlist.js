import * as types from '../constants/ActionTypes';

const initialState = {
  friendsAdded: 3,
  friends: [ 
    {
      id: 1,
      name: 'Brian Lara',
      starred: false
    },
    {
      id: 2,
      name: 'Sachin Tendulkar',
      starred: false
    },
    {
      id: 3,
      name: 'Ricky Ponting',
      starred: false
    }
  ]
}

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newFriend = {
        id: state.friendsAdded + 1,
        name: action.name
      }

      return {
        ...state,
        friendsAdded: state.friendsAdded + 1,
        friends: state.friends.concat(newFriend)
      }

    case types.DELETE_FRIEND:

      const newFriends = state.friends.filter(function(friend) {
        return friend.id !== action.id;
      });

      return {
        ...state,
        friends: newFriends
      }

    case types.STAR_FRIEND:

      const starredFriends = state.friends.map(function(friend) {
        if(friend.id === action.id){
          friend.starred = true;
        }
        return friend;
      });

      return {
        ...state,
        friends: starredFriends
      }

    default:
      return state;
  }
}
