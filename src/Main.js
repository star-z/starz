import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Autocomplete from './Pages/Autocomplete'
import Search from './Pages/Search'
import Gallery from './Pages/Gallery'
import Button from './Pages/Button'
import Modal from './Pages/Modal'
import Swipe from './Pages/Swipe'
import Embed from './Pages/Embed'
import Toggle from './Pages/Toggle'

import styles from './Main.css'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

@CSSModules(styles, { allowMultiple: true })
export default class Projects extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
      <div>
      	<div styleName='site_header'>
      		<div styleName='header_text'>
      			<a href='http://www.starjs.ooo'><i>starjs</i></a>
      		</div>
      	</div>
      	<div styleName='navigation fixed'>
      		<div>
      			<ul styleName='list'>
              <li styleName='link active'>
                <Link to='/'>
                  Embed
                </Link>
              </li>
              <li styleName='link'>
                <Link to='/autocomplete'>
                  Autocomplete
                </Link>
              </li>
              <li styleName='link'>
                <Link to='/select'>
                  Search
                </Link>
              </li>
              <li styleName='link'>
                <Link to='/gallery'>
                  Gallery
                </Link>
              </li>
      				<li styleName='link'>
                <Link to='/button'>
                  Buttons
                </Link>
      				</li>
      				<li styleName='link'>
                <Link to='/swipe'>
                  Swipe
                </Link>
      				</li>
      				<li styleName='link'>
                <Link to='/modal'>
                  Modal
                </Link>
      				</li>
      			</ul>
      		</div>
      		<div styleName='github'>
      			<a href='https://github.com/StevenIseki/starjs'>
              fork on github
            </a>
      		</div>
      	</div>
      	<div styleName='container'>
      		<div styleName='project' style={{display: 'block'}}>
              <div>
                <Route exact path="/" component={Toggle} />
                <Route exact path="/embed" component={Embed} />
                <Route exact path="/autocomplete" component={Autocomplete} />
                <Route exact path="/search" component={Search} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/button" component={Button} />
                <Route path="/modal" component={Modal} />
                <Route path="/swipe" component={Swipe} />
              </div>
      		</div>
      	</div>
      </div>
      </Router>
    )
  }
}
