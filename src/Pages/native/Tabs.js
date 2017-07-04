import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'

//import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Autocomplete'
//import Code from '../../Code'

import { Nav, Tab } from '../../components/native/Tabs'

class Example extends Component {
  constructor() {
    super()
    this.state = { page: 0 }
    this.onTabChange = this.onTabChange.bind(this)
  }

  onTabChange(tabIndex) {
    this.setState({ page: tabIndex })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.myText}>
            Selected Tab Index
          </Text>
          <Text style={styles.myTabIndex}>
            {this.state.page}
          </Text>
        </View>
        <Nav
          selected={this.state.page}
          onTabChange={this.onTabChange}>
            <Tab name="home" label="Home" />
            <Tab name="heart" label="Favorite" />
            <Tab name="cart" label="Cart" />
            <Tab name="shirt" label="Custom" />
            <Tab name="menu" label="Menu" />
        </Nav>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  myText: {
    textAlign: 'center',
  },
  myTabIndex: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})


export default Example
