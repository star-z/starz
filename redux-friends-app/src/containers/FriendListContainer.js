import React from 'react';
import styles from './FriendListContainer.css';
import FriendList from '../components/FriendList';
import FriendDetailView from './FriendDetailView';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

function FriendListContainer(props) {
    const { route } = props;

    // maybe for showing friends more details... to show off routing
    let friendDetailView = null;

    if(route.name === 'movie.detail'){
    	friendDetailView = <FriendDetailView id={ route.params.id } key={ route.params.id } />
    }

    return (
        <div className={styles.friendListApp}>
            <h1>The FriendList</h1>
            <FriendList />
            { friendDetailView }
        </div>
    );
}

export default connect(routeNodeSelector('movie'))(FriendListContainer);
