import React from 'react';
import FriendListItem from '../components/FriendListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-router5';
import styles from './FriendList.css';

import * as FriendsActions from '../actions/FriendsActions';

function FriendList(props) {
    return (
        <ul className="friendList">
            { 
            	props.friends.map(
            		friend => <FriendListItem {...friend} 
            						 key={friend.id} 
            						 deleteFriend={ () => props.deleteFriend(friend.id) } 
                                     starFriend={ () => props.starFriend(friend.id) } 
                                />
            	) 
        	}
        </ul>
    );
}

export default connect(
    state => ({ friends: state.friendlist.friends }),
    dispatch => bindActionCreators(FriendsActions, dispatch)
)(FriendList);
