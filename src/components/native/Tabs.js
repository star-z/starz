import React, { Component, PureComponent, PropTypes } from 'react';
import styled from 'styled-components'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export class Nav extends PureComponent {
  constructor() {
    super()
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(tabIndex) {
    this.props.onTabChange(tabIndex)
  }

  containerStyle() {
    return {
      flexDirection: 'row',
      borderTopWidth: StyleSheet.hairlineWidth,
      backgroundColor: this.props.backgroundColor,
      borderTopColor: this.props.borderTopColor,
      height: this.props.height,
    }
  }

  render() {
    return (
      <View style={[this.containerStyle(), this.props.style]}>
        {React.Children.map(this.props.children, (child, tabIndex) => (
          React.cloneElement(child, {
              tabIndex,
              selected: this.props.selected,
              activeColor: this.props.activeColor,
              unActiveColor: this.props.unActiveColor,
              onTabPress: this.handleTabChange,
              iconSize: this.props.iconSize,
              onlyIcon: this.props.onlyIcon,
              pressOpacity: this.props.pressOpacity,
              fontSize: this.props.fontSize,
          })
        ))}
      </View>
    )
  }
}

Nav.defaultProps = {
    onTabChange: () => {},
    activeColor: 'black',
    unActiveColor: 'gray',
    backgroundColor: 'white',
    borderTopColor: '#DDDDDD',
    height: 42,
    iconSize: 22,
    onlyIcon: false,
    pressOpacity: 0.7,
    fontSize: 11,
}


export class Tab extends PureComponent {
  constructor() {
    super()
    this.handleTabPress = this.handleTabPress.bind(this)
  }

  handleTabPress() {
    this.props.onTabPress(this.props.tabIndex)
  }

  getColor() {
    if (this.props.selected === this.props.tabIndex) {
      return this.props.activeColor
    }
    return this.props.unActiveColor
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleTabPress}
        activeOpacity={this.props.pressOpacity}
        style={[this.props.style, styles.container]}>
        <Text style={[ this.props.fontStyle, { color: this.getColor(), fontSize: this.props.fontSize } ]}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
