import React, { Fragment } from 'react';
import styled from 'styled-components';
import RatingTally from './RatingTally.jsx';
import ReviewList from './ReviewList.jsx';
import StatChart from './StatChart.jsx';
import fetch from 'node-fetch';
import axios from 'axios';

const Body = styled.div`
border: 1px solid green;
box-sizing: border-box;
font-family: AdihausDIN,Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: 400;
background-color: #fff;
color: #000;
margin: 0;
overflow-y: scroll;
padding: 0;
text-rendering: optimizeLegibility;
text-transform: none;

`;

const Header = styled.header`
border: 1px solid green;
font-family: AdineuePRO,Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: 600;
margin-bottom: 20px;
text-transform: uppercase;
`;

const ReviewModule = styled.div`
border: 1px solid green;
flex-flow: column wrap;
padding-left: 20px;
padding-right: 20px;
width: 100%;
max-width: 970px;
margin: auto;
overflow: hidden;
will-change: opacity,transform;
transition: transform 1s cubic-bezier(.2,.8,.4,1),opacity 1s cubic-bezier(.2,.8,.4,1);
margin-bottom: 60px;

`;

const Heading = styled(Header)`
font-size: 26px;
line-height: 24px;
`;

const ContentWrapper = styled.div`
border: 1px solid green;
display: flex;
flex-direction: ${(props) => props.width >= 600 ? 'row' : 'column'};
background-color: white;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: 800px) {
  flex-direction: column;
}
`;

const StatsSideDiv = styled.div`
border: 1px solid green;
`;

const ReviewDiv = styled.div`
border: 1px solid green;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`;

const Image = styled.div`
background-image: url(${(props) => props.url});
width: 80%;
height: 35rem;
background-size: 100%;
background-repeat: no-repeat;
background-position: center;
left: auto;
margin: auto;
padding: 10px;
border: 3px solid black;
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
      <Body>
        <Image url="images/IGFeed-small.png"/>

        <ReviewModule>
          <Heading>Ratings & Reviews</Heading>
          <ContentWrapper width={window.innerWidth}>
            <StatsSideDiv>
              <RatingTally />
              <StatChart />
            </StatsSideDiv>
            <ReviewDiv>
              <ReviewList reviews={reviews}/>
            </ReviewDiv>
          </ContentWrapper>
        </ReviewModule>
        
        <Image url="./images/reviewsnew-small.png" />
        <Image url="./images/OthersBought-small.png"/>
      </Body>
    );
  }
}

export default App;