import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import styles from './Gallery.css'

@CSSModules(styles, { allowMultiple: true })
export default class extends Component {
  render() {
    return (
      <div styleName='thumbnails'>
        <div styleName='thumb' style={{maxWidth: '200px'}}>
          <a>
            <div styleName='thumb_image'>
              <img
                width='200'
                height='134'
                src='//payload479.cargocollective.com/1/16/536696/11890358/prt_1472189875_2x.JPG' />
            </div>
            <div styleName='thumb_title'>
              <span>Starjs</span>
            </div>
          </a>
          <div styleName='thumb_tags'></div>
        </div>
        <div styleName='thumb' style={{maxWidth: '200px'}}>
          <a>
            <div styleName='thumb_image'>
              <img
                width='200'
                height='134'
                src='//payload479.cargocollective.com/1/16/536696/11890367/prt_1472189994_2x.JPG' />
            </div>
            <div styleName='thumb_title'>
              <span>Subscribe</span>
            </div>
          </a>
          <div styleName='thumb_tags'></div>
        </div>
        <div styleName='thumb' style={{maxWidth: '200px'}}>
          <a>
            <div styleName='thumb_image'>
              <img
                width='200'
                height='134'
                src='//payload479.cargocollective.com/1/16/536696/11890371/prt_1472188272_2x.JPG' />
            </div>
            <div styleName='thumb_title'>
              <span>About</span>
            </div>
          </a>
          <div styleName='thumb_tags'></div>
        </div>
      </div>
    )
  }
}
