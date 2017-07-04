import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export default class extends React.Component {
  static get defaultProps () {
    return {
      type: 'notice',
      message: null,
      closable: true
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

    return (
      <Overlay
        ref='overlay'
        visible={visible}
        onClick={::this.handleOverlayClick}>
        <OverlayContent>
          {
            this.props.closable && (
              <CloseWrapper>
                <Close onClick={::this.handleCloseBtnClick}>&times;</Close>
              </CloseWrapper>
            )
          }
          {this.props.children}
        </OverlayContent>
      </Overlay>
    )
  }
}

const Overlay = styled.div`
  box-sizing: content-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  color: #272b34;
  font-size: 1rem;
  z-index: 200;
  display: ${props => props.visible ? 'block' : 'none'}
`

const OverlayContent = styled.div`
  background-color: #fff;
  box-shadow: 0.1rem 0.1rem 3rem rgba(0, 0, 0, 0.25);
  box-sizing: content-box;
  margin-bottom: 4%;
  margin: 0 auto;
  padding: 10 20px;
  position: relative;
  top: 25vh;
  max-width: 60%;
  min-height: 20vw;
`

const  CloseWrapper = styled.div`
  box-sizing: content-box;
  position: relative;
`

const Close = styled.div`
  box-sizing: content-box;
  position: absolute;
  cursor: pointer;
  z-index: 100;
  font-size: 24px;
  font-weight: 300;
  line-height: 1em;
  margin: 0 auto;
  right: 10px;
  text-align: right;
`
