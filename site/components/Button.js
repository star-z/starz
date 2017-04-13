import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import styles from './Button.css'

@CSSModules(styles, { allowMultiple: true })
export default class extends Component {
  render() {
    return (
      <button styleName='button'>press me</button>
    )
  }
}
