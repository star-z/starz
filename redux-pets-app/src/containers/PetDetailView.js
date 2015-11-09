import React from 'react';
import { connect } from 'react-redux';
import find from 'lodash.find';

function mapStateToProps(state, props) {
    return {
        pet: find(state.pets, { id: props.id })
    };
}

export default function PetDetailView(props) {
    const { name, description, image } = props.pet;

    return (
        <section className='mail'>
            <h4>Pet Details</h4>
            <h4>{ name }</h4>
            <p>{ description }</p>
            <img src={image}></img>
        </section>
    );
}

export default connect(mapStateToProps)(PetDetailView);
