import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

import MovieContainer from './MovieContainer';
import NotFound from '../components/NotFound';

const components = {
    'movie':   MovieContainer
};

function Main(props) {
    const { route } = props;
    const segment = route ? route.name.split('.')[0] : undefined;
    return createElement(components[segment] || NotFound);
}

export default connect(routeNodeSelector(''))(Main);
