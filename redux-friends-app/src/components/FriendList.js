import React from 'react';
import MovieView from '../components/MovieView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-router5';

import * as FriendsActions from '../actions/FriendsActions';

function MovieList({ friends, addFriend }) {
    return (
        <ul>
            { 
            	friends.map(
            		movie => <MovieView {...movie} 
            						 key={movie.id} 
            						 onClick={ () => addFriend('my man') } />
            	) 
        	}
        </ul>
    );
}

export default connect(
    state => ({ friends: state.friendlist.friends }),
    dispatch => bindActionCreators({ addFriend: FriendsActions.addFriend, navigateTo: actions.navigateTo }, dispatch)
)(MovieList);
