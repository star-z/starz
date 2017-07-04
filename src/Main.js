import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/* web */
import Autocomplete from './Pages/web/Autocomplete'
import SortableList from './Pages/web/SortableList'
import Dropdown from './Pages/web/Dropdown'
import Search from './Pages/web/Search'
import Gallery from './Pages/web/Gallery'
import Button from './Pages/web/Button'
import Modal from './Pages/web/Modal'
import Swipe from './Pages/web/Swipe'
import Embed from './Pages/web/Embed'
import Toggle from './Pages/web/Toggle'

/* native */
import TabsNative from './Pages/native/Tabs'
import SearchNative from './Pages/native/Search'
import EmojiPickerNative from './Pages/native/EmojiPicker'

import styles from './Main.css'


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
          <p style={{background: '#ffff00', display: 'inline-block', padding: '0px 0.8rem 0 0.6rem'}}>
            <i>web</i>
          </p>
      		<div>
      			<ul styleName='list'>
              <li styleName='link'>
                <Link to='/'>
                  SortableList
                </Link>
              </li>
              <li styleName='link'>
                <Link to='/toggle'>
                  Toggle
                </Link>
              </li>
              <li styleName='link'>
                <Link to='/embed'>
                  Embed
                </Link>
              </li>
              <li styleName='link'>
                <Link to='/dropdown'>
                  Dropdown
                </Link>
              </li>
              <li styleName='link'>
                <Link to='/autocomplete'>
                  Autocomplete
                </Link>
              </li>
              <li styleName='link'>
                <Link to='/search'>
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

          <div>
            <p style={{background: '#ffff00', display: 'inline-block', padding: '0px 0.8rem 0 0.6rem'}}>
              <i>native</i>
            </p>
            <ul styleName='list'>
              <li styleName='link'>
                <Link to='/native-tabs'>
                  Tabs
                </Link>
        			</li>
        		</ul>
            <ul styleName='list'>
              <li styleName='link'>
                <Link to='/native-search'>
                  Search
                </Link>
        			</li>
        		</ul>
            <ul styleName='list'>
              <li styleName='link'>
                <Link to='/native-emojipicker'>
                  EmojiPickerNative
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
                <Route exact path="/" component={SortableList} />
                <Route exact path="/toggle" component={Toggle} />
                <Route exact path="/dropdown" component={Dropdown} />
                <Route exact path="/embed" component={Embed} />
                <Route exact path="/autocomplete" component={Autocomplete} />
                <Route exact path="/search" component={Search} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/button" component={Button} />
                <Route path="/modal" component={Modal} />
                <Route path="/swipe" component={Swipe} />
                <Route exact path="/native-tabs" component={TabsNative} />
                <Route exact path="/native-search" component={SearchNative} />
                <Route exact path="/native-emojipicker" component={EmojiPickerNative} />
              </div>
      		</div>
      	</div>
      </div>
      </Router>
    )
  }
}
