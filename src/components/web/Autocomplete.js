import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

let SearchItemInArray = (items, input) => {
  let reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
  return items.filter(function(item) {
    if (item.match(reg)) {
      return item;
    }
  })
}

export default class extends Component {
  changeInput (e) {
    if(typeof this.props.onChange !== 'undefined'){
      this.props.onChange(e)
    }

    let searchValue = ReactDOM.findDOMNode(this.refs.searchInput).value
    let result = SearchItemInArray(this.props.items, searchValue)
    this.setState({matchingItems: result})
  }

  handleSelect (e) {
    if (typeof this.props.onClick !== 'undefined') {
      this.props.onClick(e)
    }

    let result = e.target.innerHTML
    ReactDOM.findDOMNode(this.refs.searchInput).value = result
  }

  state = {
    matchingItems: []
  }

  render() {
    let items = this.state.matchingItems.map((item, i) => (
      <li key={i}>
        <a onClick={::this.handleSelect}>{item}</a>
      </li>
    ))

    return (
      <Autocomplete>
       <Input
        type="text"
        placeholder={this.props.placeHolder}
        ref="searchInput"
        onKeyUp={::this.changeInput} />

        <Menu ref="autocomplete" visible={items.length}>
          <MenuItems>{items}</MenuItems>
        </Menu>
      </Autocomplete>
    )
  }
}

const MenuItems = styled.div`
  list-style-type: none;
  padding: 0em;
  margin: 0em;
  li {
    color: #666;
    font-weight: italic;
  }
`

const Autocomplete = styled.div`
  margin: 0;
  padding: 1em;
  font-size: 150%;
  font-weight: 200;
  line-height: 1.5;
`

const Input = styled.input`
  width: 100%;
  padding: 1em;
`

const Menu = styled.div`
  display: block;
  line-height: 1.5em;
  text-decoration: none;
  white-space: nowrap;
  padding: 0.5em;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};;
  border: ${props => props.open ? '1px solid #b7b7b7' : 'none'};
`
