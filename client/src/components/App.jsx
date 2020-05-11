import React, { Fragment } from 'react';
import styled from 'styled-components';
import RatingTally from './RatingTally.jsx';
import ReviewList from './ReviewList.jsx';
import StatChart from './StatChart.jsx';
import fetch from 'node-fetch';
import axios from 'axios';

// import othersbought from '../../dist/images/OthersBought-small.png';

const ImageBackground = styled.div`
 background-image: url(${(props) => props.url});
height: 1000px;
width: 1000px;
background-size: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      productcode: '1'
    };
    this.changeReviews = this.changeReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  // HTTP Request Handlers
  fetchReviews() {
    let url = `/api/models/${this.state.productcode}/reviews`;
    // fetch(url)
    // .then(response => response.json()) 
    axios(url)
      .then(response => response.data)
      .then(reviewsData => this.changeReviews(reviewsData))
      .catch(err => console.error(err));
  }

  // Set State
  changeReviews(reviews) {
    this.setState({ reviews }, ()=>console.log('set state:', this.state.reviews));
  }

  render() {
    let {reviews} = this.state;
    return (
      <div>
        <ImageBackground url="./images/OthersBought-small.png" ></ImageBackground>

      <div>
        
          
        <div className="review-module">
          <div className="sidebar">
            <RatingTally />
            <StatChart />
          </div>
          <div className="main">
            <ReviewList reviews={reviews}/>
          </div>
        </div>
        
        <div className="below">
          {/* <img src="../../dist/images/OthersBought-small.png" alt="Others Bought Image Carousel" /> */}
        </div>
      </div>
      </div>
    );
  }
}

export default App;