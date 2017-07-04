import React, { Component } from 'react'
import { AppRegistry, ScrollView, View, Text, TouchableOpacity } from 'react-native'

//import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Autocomplete'
//import Code from '../../Code'

import EmojiPicker from '../../components/native/EmojiPicker'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }
  }

  logEmoji (emoji) {
    console.log(emoji)
  }

  render() {
    return (
      <ScrollView>
        <EmojiPicker
          onEmojiSelected={this.logEmoji.bind(this)}
          visible={this.state.visible}
          />
          <TouchableOpacity
            onPress={() => {this.setState({visible: !this.state.visible})}}>
          </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default Example
