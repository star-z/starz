import React from 'react';
import MovieView from '../components/MovieView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-router5';

function MovieList({ friends, navigateTo }) {
    return (
        <ul>
            { 
            	friends.map(
            		movie => <MovieView {...movie} 
            						 key={movie.id} 
            						 onClick={ () => navigateTo('movie.detail', { id: movie.id }) } />
            	) 
        	}
        </ul>
    );
}

export default connect(
    state => ({ friends: state.friendlist.friends }),
    dispatch => bindActionCreators({ navigateTo: actions.navigateTo }, dispatch)
)(MovieList);
