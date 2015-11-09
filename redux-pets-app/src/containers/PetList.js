import React from 'react';
import PetView from '../components/PetView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-router5';

function PetList({ pets, navigateTo }) {
    return (
        <ul>
            { 
            	pets.map(
            		pet => <PetView {...pet} 
            						 key={pet.id} 
            						 onClick={ () => navigateTo('pet.detail', { id: pet.id }) } />
            	) 
        	}
        </ul>
    );
}

export default connect(
    state => ({ pets: state.pets }),
    dispatch => bindActionCreators({ navigateTo: actions.navigateTo }, dispatch)
)(PetList);
