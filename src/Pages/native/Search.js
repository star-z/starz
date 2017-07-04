import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

//import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Autocomplete'
//import Code from '../../Code'

import Search from '../../components/native/Search'

class Example extends Component {
  constructor() {
    super()
    this.onSearchChange = ::this.onSearchChange
  }

  onSearchChange(search) {
    this.setState({ search })
  }

  render() {
    return (
      <Search onSearchChange={this.onSearchChange} />
    )
  }
}

export default Example
