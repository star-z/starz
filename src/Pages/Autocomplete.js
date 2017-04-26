import React, { Component } from 'react'

import ExampleCode from '!!../prism-loader?language=javascript!../components/Autocomplete'
import Code from '../Code'
import Autocomplete from '../components/Autocomplete'

let items = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala','haskell']

export default class extends Component {
  render() {
    return (
			<div className='wrapper'>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Search component</span>
          <br />
          <Code code={`yarn add star-search\nimport Search from 'star-search'`} />
        </div>
        <Autocomplete items={items} />
        <Code code={ExampleCode} />
			</div>
    )
  }
}
