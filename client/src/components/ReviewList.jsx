import React, { Fragment } from 'react';
import styled from 'styled-components';
import ReviewListEntry from './ReviewListEntry.jsx';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
  }

  // HTTP Request Handlers
  // Set State
  // Event Handlers

  render() {
    return (
      <Fragment>
        <div className="nav-sort">
          <div>sort on</div>
          <Button>newest</Button>
          <Button>helpful</Button>
          <Button>relevant</Button>
        </div>
        {this.props.reviews.map((review) => 
          <ReviewListEntry key={review.id} review={review}/>
        )}
        <div className="nav-footer">
          <button>load more</button>
          <button>write a review</button>
        </div>
      </Fragment>
    );
  }
}

export default ReviewList;