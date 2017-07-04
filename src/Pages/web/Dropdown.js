import React, { Component } from 'react'

import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Dropdown'
import Code from '../../Code'
import Dropdown from '../../components/web/Dropdown'

let options = ['reactjs','vue','glimmer']

export default class extends Component {

  render() {
    return (
      <div>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Dropdown component</span>
          <br />
          <Code code={`yarn add star-dropdown\nimport Modal from 'star-dropdown'`} />
        </div>

        <div style={{margin: '20px 0'}}>
        <Dropdown
          selectId='languages'
          selectName='languages'
          initialValue='reactjs'
          options={options} />
        </div>
        <Code code={ExampleCode} />
      </div>
    )
  }
}
