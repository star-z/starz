import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'
import styled from 'styled-components'

export default class extends React.Component {
  static get defaultProps () {
    return {
      placeholder: 'Search',
      autoFocus: false
    }
  }

  static get propTypes () {
    return {
      inputName: React.PropTypes.string,
      placeholder: React.PropTypes.string,
      autoFocus: React.PropTypes.bool,
      onKeyChange: React.PropTypes.func,
      onSearchClick: React.PropTypes.func,
      onClearClick: React.PropTypes.func
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      focused: true
    }
  }

  componentDidMount() {
    if(this.props.autoFocus) { this.focusInput() }
  }

  focusInput() {
    ReactDOM.findDOMNode(this.refs.searchInput).placeholder = ''
    ReactDOM.findDOMNode(this.refs.searchInput).value = ''
    ReactDOM.findDOMNode(this.refs.searchInput).focus()
  }

  handleInputBlur (e) {
    const { placeholder } = this.props
    ReactDOM.findDOMNode(this.refs.searchInput).placeholder = placeholder
    this.setState({ focused: false  })
  }

  handleInputFocus (e) {
    this.focusInput()
    this.setState({ focused: false  })
  }

  handleInputClick (e) {
    this.focusInput()
    this.setState({ focused: false  })
  }

  handleKeyChange (e) {
    const { searchValue } = this.state
    this.setState({ searchValue: this.refs.searchInput.value }, () => {
      if (this.props.onKeyChange !== undefined) {
        this.props.onKeyChange(searchValue)
      }
    })
  }

  handleSearchClick() {
    const { searchValue } = this.state
    if (this.props.onSearchClick !== undefined) {
      this.props.onSearchClick(searchValue)
    }
  }

  handleClearClick() {
    const { searchValue } = this.state
    this.refs.searchInput.value = ''
    this.setState({ searchValue: '' }, () => {
      if (this.props.onClearClick !== undefined) {
        this.props.onClearClick(searchValue)
      }
    })
  }

  render() {
    const { inputName, placeholder } = this.props
    const { focused } = this.state

    return (
      <SearchWrapper>
        <SearchInput
          focused={focused}
          name={inputName}
          type="text"
          maxLength="100"
          autoComplete="off"
          autoCorrect="off"
          ref='searchInput'
          placeholder={placeholder}
          onClick={() => this.handleInputClick()}
          onFocus={() => this.handleInputFocus()}
          onBlur={() => this.handleInputBlur()}
          onKeyUp={() => this.handleKeyChange()} />
        <SearchClear focused={focused} onClick={() => this.handleClearClick()} />
        <SearchSubmit focused={focused} onClick={() => this.handleSearchClick()} >
          <svg viewBox='0 0 24 24' height='100%' width='100%'><g><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path></g></svg>
        </SearchSubmit>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  border-color: ${props => props.focused ? '#ccc' : 'transparent'};

  @media (min-width: 640px) {
    min-width: 480px;
    width: 40%;
  }
`

const SearchInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 2px;
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
`

const SearchSubmit = styled.span`
  position: absolute;
  right: 0;
  height: 2rem;
  width: 3rem;
  display: block;
  top: 15px;
  border-color: ${props => props.focused ? '#ccc' : 'transparent'};
  svg {
    height: 20px;
    fill: #ccc;
  }
`

const SearchClear = styled.span`
  &:before {
    content: '\\00d7';
  }

  position: absolute;
  right: 0;
  height: 2rem;
  width: 3rem;
  display: block;
  padding: 0 1rem;
  font-size: 1.4rem;
  opacity: 0.2;
  top: 5px;
  border-color: ${props => props.focused ? '#ccc' : 'transparent'};
`
