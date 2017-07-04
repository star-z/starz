import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export default class extends React.Component {
  clear () {
    let elem = ReactDOM.findDOMNode(this)
    let checkedElem = $(elem).find('input:checked')[0]
    if(checkedElem !== undefined) {
      checkedElem.checked = false
    }
  }

  handleClick (e) {
    let parentLabel = e.target.parentElement
    if(parentLabel !== undefined){
      let value = parentLabel.querySelector('span').innerText
      if (this.props.onToggle !== undefined) {
        this.props.onToggle(value)
      }
    }
  }

  render() {
    const { items, checked, name } = this.props;

    let radioItems = items.map( (item, i) => {
      if(item === checked){
        return (
          <Label key={i}>
            <Input
              type="radio"
              defaultChecked
              name={name}
              onClick={::this.handleClick} />
            <span>{item}</span>
          </Label>
        )
      } else {
        return (
          <Label key={i}>
            <Input
              type="radio"
              name={name}
              onClick={::this.handleClick} />
            <span>{item}</span>
          </Label>
        )
      }
    })

    return (
      <Toggle id={name}>
        {radioItems}
      </Toggle>
    )
  }
}

const Toggle = styled.div`
  overflow: hidden;
`

const Label = styled.label`
  border-radius: 0.3rem;
  border: 1px solid $white !important;
  cursor: pointer;
  float:left;
  margin: 1rem;
  overflow:auto;
  span {
    display:block;
    font-size: 20px;
    font-weight: normal;
    padding: 1.5rem 2.2rem;
    text-align:center;
    background-color: #eee;
  }
`
const Input = styled.input`
  position: absolute;
  visibility: hidden;
  &:checked {
    + span {
      background-color: #ffebeb;
      color: white;
    }
  }
`
