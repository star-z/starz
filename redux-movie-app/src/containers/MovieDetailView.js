import React from 'react';
import { connect } from 'react-redux';
import find from 'lodash.find';

function mapStateToProps(state, props) {
    return {
        movie: find(state.movies, { id: props.id })
    };
}

export default function MovieDetailView(props) {
     const { name, description, year, image } = props.movie;

    return (
        <section className='mail'>
            <h4>Movie Details</h4>
            <h4>{ name }</h4>
            <p>{ description }</p>
            <p>{ year }</p>
            <img src={image}></img>
        </section>
    );

}

export default connect(mapStateToProps)(MovieDetailView);
