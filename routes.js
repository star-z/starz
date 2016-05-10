import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'

/* containers */
import AppContainer from './containers/App'
import Movies from './containers/Movies'
import Series from './containers/Series'
import Reviews from './containers/Reviews'

const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRedirect to='/movies' />
    <Route path='/movies' component={Movies} />
    <Route path='/series' component={Series} />
    <Route path='/reviews' component={Reviews} />
  </Route>
)

export default routes
