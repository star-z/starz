import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

export default class Select extends React.Component {
  constructor (props) {
    super()
    this.state = { value: props.initialValue }
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  render () {
    const {selectId, selectName, options, defaultText} = this.props
    const {value} = this.state

    return (
      <select
        id={selectId}
        name={selectName}
        value={value}
        onChange={::this.handleChange}>
        {
          value === null ? (
            <option disabled selected value>
              {defaultText !== undefined ? defaultText : '-- select an option --' }
            </option>
          ) : null
        }
        {
          options.map((v, i) => {
            return (
              <option key={i} value={v}>{v}</option>
            )
          })
        }
      </select>
    )
  }
}
