import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export class Tab extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static get propTypes () {
    return {
      children: React.PropTypes.node.isRequired
    }
  }

  render () {
    return (
      <TabWrapper className='hidden'>
        {React.Children.map(this.props.children, item => item)}
      </TabWrapper>
      )
  }
}


export class Tabs extends Component {
  static get propTypes () {
    return {
      onChangeTab: PropTypes.func,
      children: PropTypes.array.isRequired,
      headers: PropTypes.array.isRequired
    }
  }

  constructor (props) {
    super(props)
    this.state = { activeTabIndex: 0 }
    this.changeTab = ::this.changeTab
  }

  componentDidMount () {
    this.removeAllTabs()
    this.selectTab(0)
  }

  removeAllTabs () {
    const elems = document.querySelectorAll('div[data-tab-id]')
    const $elems = [].slice.call(elems)
    $elems.map( (elem) => {
      let className = elem.firstChild.className.replace('hidden', '')
      elem.firstChild.className = `${className} hidden`
    })
  }

  selectTab (index) {
    let tabId = document.querySelector(`div[data-tab-id="${index}"]`)
    let className = tabId.firstChild.className
    tabId.firstChild.className = className.replace('hidden', '')
  }

  changeTab (headerText, index) {
    this.setState({activeTabIndex: index})
    this.removeAllTabs()
    this.selectTab(index)

    if (this.props.onChangeTab !== undefined) {
      this.props.onChangeTab(index, headerText)
    }
  }

  render () {
    const {activeTabIndex} = this.state
    let headers = this.props.headers.map((h, i) => {
      return (
        <li key={i}>
          <TabLink
            selected={activeTabIndex === i}
            onClick={() => this.changeTab(h, i)}>{h}</TabLink>
        </li>
      )
    })

    return (
      <TabsWrapper>
        <Header>
          <ul>
            {headers}
          </ul>
        </Header>
        <TabsInner>
          {React.Children.map(this.props.children, (item, i) => <div data-tab-id={i}>{item}</div>)}
        </TabsInner>
      </TabsWrapper>
    )
  }
}

const TabsWrapper = styled.div`
  margin: 0;
  padding: 1em;
  font-size: 1.1rem;
  line-height: 1.5;
  width: 30rem;
  border: 1px solid #ddd;
  background: rgb(250, 250, 250);

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
  }
  ul li {
    display: inline;
  }
  div {
    .hidden { display: none; }
  }
`

const TabsInner = styled.div`
  width: 30rem;
`

const Header = styled.div`
`

const TabWrapper = styled.div`
  margin: 1em auto;
  padding: 1em;
  background: rgb(250, 250, 250);
`

const TabLink = styled.a`
  text-decoration: none;
  padding: 1em;
  color: #fff;
  color: ${props => props.selected ? 'black' : '#ddd'};
  background-color: rgb(250, 250, 250);
  &:hover {
    color: black;
  }
`
