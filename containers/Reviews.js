import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reviewsSelector } from '../selectors'

import Review from '../components/Review'
import List from '../components/List'

@connect(reviewsSelector)
export default class Reviews extends Component {

  renderReview(review) {
    return <Review key={`review_${review.id}`} review={review} />
  }

  render() {
    const { reviews, fetching } = this.props

    return (
      <div>
        {reviews.length <= 0 ? <span>loading...</span> :
          <List items={reviews} renderItem={this.renderReview} /> }
      </div>
    )
  }
}
