import React, { Fragment } from 'react';
import RatingTally from './RatingTally.jsx';
import ReviewList from './ReviewList.jsx';
import StatChart from './StatChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      productcode: 'EG4958'
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
    this.setState({ reviews }, ()=>console.log(this.state.reviews));
  }

  render() {
    let {reviews} = this.state;
    return (
      <Fragment>
        <div className="above"></div>
          
        <div className="review-module">
          <div className="sidebar">
            <RatingTally />
            <StatChart />
          </div>
          <div className="main">
            <ReviewList reviews={reviews}/>
          </div>
        </div>
        
        <div className="below"></div>
      </Fragment>
    );
  }
}

export default App;