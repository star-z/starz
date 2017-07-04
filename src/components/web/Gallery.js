import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

export default class extends Component {
  render() {
    const {images} = this.props
    return (
      <Wrapper>
        {
          images.map((img, i) => {
            return (
              <Thumb key={i}>
                <a>
                  <ThumbImage>
                    <img width='200' height='134' src={img.src} />
                  </ThumbImage>
                  <ThumbTitle><span>About</span></ThumbTitle>
                </a>
              </Thumb>
            )
          })
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  padding-top: 5px;
  font-size: 0;
  width: 705px;
`

const Thumb = styled.div`
  display: inline-block;
  margin: 10px 30px 10px 0;
  position: relative;
  text-align: center;
  font-size: 12px;
  vertical-align: top;
  max-width: 200px;

  a {
    &:active {
      img:first-of-type {
        transform: translate(0, 2px);
      }
    }

    &:hover {
      display: inline-block;
    	text-decoration: none;
      div:first-of-type {
        outline: 1px solid #999999;
      	outline-offset: 2px;
      }
      span:first-of-type {
        background: #ffff00;
      }
    }
  }
`

const ThumbImage = styled.div`
  position: relative;
	margin-bottom: 12px;
	min-width: 200px;
	min-height: 134px;
	transition: -webkit-transform 0.05s linear;

  img {
    display: block;
  	margin: 0;
  }
`

const ThumbTitle = styled.div`
  color: #333333;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  span {
    padding: 2px 3px 2px 3px;
  }
`
