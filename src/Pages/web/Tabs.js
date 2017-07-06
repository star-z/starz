import React, { Component } from 'react'

import ExampleCode from '!!../../prism-loader?language=javascript!../../components/web/Tabs'
import Code from '../../Code'
import { Tabs, Tab } from '../../components/web/Tabs'

export default class extends Component {
  handleChange (e) {
    this.setState({value: e})
    console.log(e)
  }

  render() {
    const headers = ['heading 1', 'heading 2', 'heading 3'];

    return (
			<div className='wrapper'>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Tabs component</span>
          <br />
          <Code code={`yarn add star-toggle\nimport {Tab, Tabs} from 'star-tabs'`} />
        </div>

        <Tabs headers={headers}>
          <Tab>
            <div>
              <p>This is the first tab</p>
            </div>
            <div>
              <p>With some nested content</p>
            </div>
          </Tab>
          <Tab>
            <p>This is the second tab</p>
          </Tab>
          <Tab>
            <p>This is the third tab</p>
          </Tab>
        </Tabs>

        <Code code={ExampleCode} />
			</div>
    )
  }
}
