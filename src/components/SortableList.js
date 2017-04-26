import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export default class extends Component {
  constructor (props) {
    super(props)
    let placeholder = document.createElement("li")
    placeholder.className = "placeholder"
    this.state = {
      items: this.props.items,
      placeholder: placeholder
    }
  }

  dragStart(e) {
    this.dragged = e.currentTarget
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData("text/html", e.currentTarget)
  }

  dragEnd(e) {
    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(this.state.placeholder);
    let items = this.state.items;
    let from = Number(this.dragged.dataset.id)
    let to = Number(this.over.dataset.id)
    if (from < to) { to-- }
    if (this.nodePlacement == "after") { to++ }
    items.splice(to, 0, items.splice(from, 1)[0])
    this.setState({items: items});
  }

  dragOver(e) {
    e.preventDefault()
    this.dragged.style.display = "none"
    if(e.target.className == "placeholder") return
    this.over = e.target
    let relY = e.clientY - this.over.offsetTop
    let height = this.over.offsetHeight / 2
    let parent = e.target.parentNode
    if (relY > height) {
      this.nodePlacement = "after"
      parent.insertBefore(this.state.placeholder, e.target.nextElementSibling)
    } else if (relY < height) {
      this.nodePlacement = "before"
      parent.insertBefore(this.state.placeholder, e.target)
    }
  }

  render() {
    const { items } = this.state
    const listItems = items.map((item, i) => {
      return (
        <SortableList data-id={i} key={i}
            draggable="true"
            onDragEnd={::this.dragEnd}
            onDragStart={::this.dragStart}>
          {item}
        </SortableList>
      )
    })

    return (
      <ListWrapper onDragOver={::this.dragOver}>
        {listItems}
      </ListWrapper>
    )
  }
}

const SortableList = styled.li`
  margin: 0;
  padding: 1em;
  font-size: 100%;
  font-weight: 100;
  line-height: 1;
  color: #666;
  padding: 1em;
  background:#eee
`
const ListWrapper = styled.ul`
  list-style: none;
  margin:0;
  padding:0
`

/*
li.placeholder {
  background: #03CC85;
}

li.placeholder:before {
  content: "Drop here";
  color: #666;
}
*/
