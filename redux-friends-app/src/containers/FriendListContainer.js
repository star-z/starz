import React from 'react';
import styles from './FriendListContainer.css';
import AddFriendInput from '../components/AddFriendInput';
import FriendList from '../components/FriendList';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { bindActionCreators } from 'redux';
import * as FriendsActions from '../actions/FriendsActions';

function FriendListContainer( props) {

    console.log(props)

    const { route } = props;

    const actions = {
        addFriend: props.addFriend,
        deleteFriend: props.deleteFriend,
        starFriend: props.starFriend
    }

    return (
        <div className="friendListApp">
            <h1>The FriendList</h1>
            <AddFriendInput addFriend={props.addFriend} />
            <FriendList actions={actions} />
        </div>
    );
}

export default connect(
    routeNodeSelector('friends'),
    dispatch => bindActionCreators(FriendsActions, dispatch)
)(FriendListContainer);
