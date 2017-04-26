import React, { Component } from 'react'

import ExampleCode from '!!../prism-loader?language=javascript!../components/Gallery'
import Code from '../Code'
import Gallery from '../components/Gallery'

const images = [
  { src: '//payload479.cargocollective.com/1/16/536696/11890358/prt_1472189875_2x.JPG', title: 'image 1' },
  { src: '//payload479.cargocollective.com/1/16/536696/11890367/prt_1472189994_2x.JPG', title: 'image 2' },
  { src: '//payload479.cargocollective.com/1/16/536696/11890371/prt_1472188272_2x.JPG', title: 'image 3' }
]

export default class extends Component {
  render() {
    return (
      <div >
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Gallery component</span>
          <br />
          <Code code={`yarn add star-gallery\nimport Gallery from 'star-gallery'`} />
        </div>
        <Gallery images={images} />
        <Code code={ExampleCode} />
      </div>
    )
  }
}
