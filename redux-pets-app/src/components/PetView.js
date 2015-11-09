import React from 'react';

function PetView(props) {
    const { name, description, onClick } = props;

    return (
        <li onClick={ onClick }>
            <h4>{ name }</h4>
        </li>
    );
}

export default PetView;
