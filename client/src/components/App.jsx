import React, { Fragment } from 'react';
import RatingTally from './RatingTally';
import ReviewList from './ReviewList';
import StatChart from './StatChart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      productcode: 1
    };
    this.changeReviews = this.changeReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  // HTTP Request Handlers
  fetchReviews() {
    let url = `/api/models/${this.state.productcode}/reviews`;
    fetch(url)
      .then(response => response.json())
      .then(reviewsData => this.changeReviews(reviewsData))
      .catch(err => console.error(err));
  }

  // Set State
  changeReviews(reviews) {
    this.setState({ reviews: reviews });
  }

  render() {
    return (
      <Fragment>
        <div>
          Hello World
        </div>
        <div className="sidebar">
          <RatingTally />
          <StatChart />
        </div>
        <div className="main">
          <ReviewList />
        </div>
      </Fragment>
    );
  }
}

export default App;