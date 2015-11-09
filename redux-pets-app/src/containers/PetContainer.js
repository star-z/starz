import React from 'react';
import PetList from './PetList';
import PetDetailView from './PetDetailView';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

function PetContainer(props) {
    const { route } = props;

    let petDetailView = null;

    if(route.name === 'pet.detail'){
    	petDetailView = <PetDetailView id={ route.params.id } key={ route.params.id } />
    }

    return (
        <div>
            <PetList />
            { petDetailView }
        </div>
    );
}

export default connect(routeNodeSelector('pet'))(PetContainer);
