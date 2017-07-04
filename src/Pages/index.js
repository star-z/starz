import React, { Component } from 'react'
import Code from '../Code'

import ButtonCode from '!!../prism-loader?language=javascript!../components/web/Button'
import Button from '../components/web/Button'

const renderStars = ({match}) => {
  if (match.params.button) {
    /* Button */
    return <div><Button /><Code code={ButtonCode} /></div>
  }
  return null
}

const Topic = ({match}) => {
  console.log(match.params.button)

  return (
    <div className='wrapper'>
      <div style={{margin: '20px 0'}}>
        <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Button component</span>
        <br />
        <Code code={`yarn add star-button\nimport Button from 'star-button'`} />
      </div>
      {renderStars({match})}
    </div>
  )
}

export default Topic

/*
export default class extends Component {
  render() {
    return (
    )
  }
}
*/
