import React from 'react';
import MovieList from './MovieList';
import MovieDetailView from './MovieDetailView';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

function MovieContainer(props) {
    const { route } = props;

    let movieDetailView = null;

    if(route.name === 'movie.detail'){
    	movieDetailView = <MovieDetailView id={ route.params.id } key={ route.params.id } />
    }

    return (
        <div>
            <MovieList />
            { movieDetailView }
        </div>
    );
}

export default connect(routeNodeSelector('movie'))(MovieContainer);
