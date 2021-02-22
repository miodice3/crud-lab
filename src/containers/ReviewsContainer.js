import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} restaurant={this.props.restaurant} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
  addReview: object => dispatch({ type: "ADD_REVIEW", object}),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);