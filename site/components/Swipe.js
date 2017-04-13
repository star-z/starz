import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import {lory} from 'lory.js'

export default class extends Component {
  componentDidMount() {
    //var element = document.getElementById(this.props.elementId)
    lory(document.getElementById('swiper'), {
        // options going here
    });
  }

  render () {
    const { navigation, elementId } = this.props
    return (
      <div id='swiper' className='swipe'>
        <div className='slider js_slider'>
          <div className='frame js_frame'>
            <ul className='slides js_slides'>
              <li className='js_slide'>1</li>
              <li className='js_slide'>2</li>
              <li className='js_slide'>3</li>
            </ul>
          </div>
          <span className='js_prev prev'>
            <svg width='25' height='25' viewBox='0 0 501.5 501.5'><g><path fill='#999999' d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z' /></g></svg>
          </span>
          <span className='js_next next'>
            <svg width='25' height='25' viewBox='0 0 501.5 501.5'><g><path fill='#999999' d='M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z' /></g></svg>
          </span>
        </div>
      </div>
    )
  }
}
