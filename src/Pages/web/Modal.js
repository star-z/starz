import React, { Component } from 'react'

import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Modal'
import Code from '../../Code'
import Modal from '../../components/web/Modal'

export default class extends Component {
  render() {
    return (
      <div>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Modal component</span>
          <br />
          <Code code={`yarn add star-modal\nimport Modal from 'star-modal'`} />
        </div>
        <div style={{margin: '20px 0'}}>
          <Modal visible>
            <div style={{padding: '20px'}}>
              <i>some content in the modal ...</i>
            </div>
          </Modal>
        </div>
        <Code code={ExampleCode} />
      </div>
    )
  }
}
