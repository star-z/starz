import React from 'react';
import { connect } from 'react-redux';
import find from 'lodash.find';

function mapStateToProps(state, props) {
    return {
        friend: find(state.friendlist.friends, { id: props.id })
    };
}

export default function FriendDetailView(props) {

     const vex = 'vex'

     const { name } = props.friend;

    return (
        <section className='mail'>
            <h4>Movie Details</h4>
            <h4>{ name }</h4>
        </section>
    );

}

export default connect(mapStateToProps)(FriendDetailView);
