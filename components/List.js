import React, { Component } from 'react'
import map from 'lodash/map'
import styles from './List.css'
import CSSModules from 'react-css-modules'

@CSSModules(styles)
export default class List extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { items } = this.props

    return (
      <div styleName='List'>
        <div styleName='Row'>
          {map(items, this.props.renderItem)}
        </div>
      </div>
    )
  }
}
