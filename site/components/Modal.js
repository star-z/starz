import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'

import styles from './Modal.css'

@CSSModules(styles, { allowMultiple: true })
export default class Modal extends React.Component {
  static get defaultProps () {
    return {
      type: 'notice',
      message: null
    }
  }

  constructor(props) {
    super()
    this.state = { visible: props.visible }
  }

  componentWillMount() {
    this.handleBeforeComponentUpdate(this.props)
  }

  componentDidMount() {
    this.handleComponentUpdate(this.props, this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleComponentUpdate(prevProps, prevState)
  }

  componentWillUnmount() {
    this.setBodyOverflowVisible(true)
  }

  handleBeforeComponentUpdate(props) {
    if (props.hasOwnProperty('visible') && props.visible !== this.state.visible) {
      this.setState({ visible: props.visible });
    }
  }

  handleComponentUpdate(prevProps, prevState) {
    if (prevState.visible !== this.state.visible) {
      if (this.state.visible) {
        this.props.onShow &&
          this.props.onShow()
      } else {
        this.props.onHide &&
          this.props.onHide()
      }
      this.setBodyOverflowVisible(!this.state.visible);
    }
  }

  setBodyOverflowVisible(visible) {
    if (!visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  handleCloseBtnClick(e) {
    e.preventDefault()
    e.stopPropagation()
    this.toggleVisibility()
  }

  handleOverlayClick(e) {
    if (e.target === ReactDOM.findDOMNode(this.refs.overlay) && this.props.closable) {
      e.preventDefault()
      e.stopPropagation()
      this.toggleVisibility()
    }
  }

  toggleVisibility() {
    var visible = !this.state.visible
    this.setState({ visible: visible })
  }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    let closeBtn = (
      <div styleName='overlayCloseWrapper'>
        <div styleName='overlayClose' title='Close'
             onClick={this.handleCloseBtnClick.bind(this)}>
          &times;
        </div>
      </div>
    )
    if (this.props.closable === false) {
      closeBtn = (<div></div>)
    }
    let closeClass = `overlay ${visible ? '' : ' hidden'}`

    return (
      <div ref='overlay' styleName={closeClass}
           onClick={this.handleOverlayClick.bind(this)}>
        <div styleName='overlayContent'>
          {closeBtn}
          {this.props.children}
        </div>
      </div>
    )
  }
}
