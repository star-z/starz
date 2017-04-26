import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styled from 'styled-components'

export default class extends Component {
  render() {
    return (
      <Button>press me</Button>
    )
  }
}


const Button = styled.button`
  color: #fff;
  display: inline-block;
  font-size: 14px;
  width: 40%;
  padding: 5px;
  text-align:center;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid transparent;
  background: buttonface;
  outline: none;
  &:hover {
    background-color: #fff;
    border: 1px solid buttonface;
    color: buttonface;
  }
`
