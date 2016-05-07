import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Movie.css'
import { connect } from 'react-redux'

@CSSModules(styles)
export default class Movie extends Component {

  render() {
    const { movie } = this.props
    const imageStyle = { backgroundImage: `url('${movie.screenshot}')` }

    return (
      <div styleName='Card'>
        <div styleName='Inner'>
          <div styleName='Image' style={imageStyle} />
          <div styleName='Details'>
            <div styleName='Category'>{movie.category}</div>
            <div styleName='Date'>{movie.published_at}</div>
            <div styleName='Title'>{movie.title}</div>
          </div>
          <div styleName='Hover'>
            <div>
              <div styleName='Category'>{movie.topic}</div>
              <div styleName='Date'>{movie.published_at}</div>
            </div>
            <div styleName='HoverTitle'>
              {movie.title}
            </div>
            <div styleName='Description' dangerouslySetInnerHTML={{ __html: movie.description }} />
            <div styleName='Authors'>
              <p><strong>{movie.user_name}</strong></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
