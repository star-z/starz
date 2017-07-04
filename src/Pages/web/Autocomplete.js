import React, { Component } from 'react'

import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Autocomplete'
import Code from '../../Code'
import Autocomplete from '../../components/web/Autocomplete'

let items = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 'java', 'c', 'scala','haskell']

export default class extends Component {
  render() {
    return (
			<div className='wrapper'>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Autocomplete component</span>
          <br />
          <Code code={`yarn add star-autocomplete\nimport Search from 'star-autocomplete'`} />
        </div>
        <Autocomplete items={items} />
        <Code code={ExampleCode} />
			</div>
    )
  }
}
