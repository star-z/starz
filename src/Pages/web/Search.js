import React, { Component } from 'react'

import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Search'
import Code from '../../Code'
import Search from '../../components/web/Search'

export default class extends Component {
  clear(items) {
     console.log('clearing...')
     console.log(items)
   }
   search(items) {
     console.log('searching...')
     console.log(items)
   }
   change(items) {
     console.log('key change...')
     console.log(items)
   }

  render() {
    return (
			<div className='wrapper'>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Search component</span>
          <br />
          <Code code={`yarn add star-search\nimport Search from 'star-search'`} />
        </div>
        <Search
          inputName='my-input'
          placeholder='Search for something...'
          onClearClick={::this.clear}
          onSearchClick={::this.search}
          onKeyChange={::this.change} />
        <Code code={ExampleCode} />
			</div>
    )
  }
}
