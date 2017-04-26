import React, {Component} from 'react'
import styled from 'styled-components'

export default class extends Component {
  render () {
    return (
      <Wrapper>
        <Embed>
          <DeleteWrapper>
            <Delete>
                <svg width='22' height='22' viewBox='0 0 24 24'>
                  <g fill='currentColor'>
                    <path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' />
                    <path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' />
                  </g>
                </svg>
            </Delete>
          </DeleteWrapper>

          <EmbedWrapper>
            <EmbedBlock
              src={this.props.src}
              frameBorder='0'
              allowFullScreen />
          </EmbedWrapper>
        </Embed>
      </Wrapper>
    )
  }
}

const EmbedWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 56.25%;
  margin: 0 auto;
`

const EmbedBlock = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  padding: 2px;
  margin: -2px;
  position: relative;
  border: solid 1px #ddd;
`

const Embed = styled.div`
  user-select: none;
`

const DeleteWrapper = styled.div`
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Delete = styled.div`
  flex: 1;
  cursor: pointer;
  color: #ddd;
  &:hover {
    color: #333;
  }
`
