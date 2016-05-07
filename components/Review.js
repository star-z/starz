import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Review.css'
import map from 'lodash/map'

@CSSModules(styles)
export default class Review extends Component {

  constructor(props) {
    super(props)
    this.state = { top: 0 }
  }

  mouseLeave(event) {
    this.setState({ top: 0 })
  }

  mouseMove(event) {
    let targetTop = event.currentTarget.offsetTop
    let targetHeight = event.currentTarget.offsetHeight - 50
    let positionY = event.pageY - targetTop
    let elem = this.refs['review']
    let percentage = positionY / targetHeight
    let innerHeight = elem.clientHeight
    let offset = percentage * (innerHeight - targetHeight)
    this.setState({ top: 0 - offset })
  }

  render() {
    const { review } = this.props

    return (
      <div styleName='Card'>
        <div styleName='Inner'
             onMouseMove={this.mouseMove.bind(this)}
             onMouseLeave={this.mouseLeave.bind(this)}>

          <div styleName='Details' ref='details'>
            <div styleName='Meta'>
              <div styleName='Category'>{review.category}</div>
            </div>
          </div>

          <div styleName='Review' ref='review' style={{ top: this.state.top }}>
            <div styleName='Title'>{ review.title }</div>
            <p><strong>{review.user_name}</strong></p>
            <div styleName='Avatar' />
            <div dangerouslySetInnerHTML={{ __html: review.body }} />
          </div>
        </div>
      </div>
    );
  }
}
