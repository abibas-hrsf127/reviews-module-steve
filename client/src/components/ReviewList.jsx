import React, { Fragment } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

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
          <button>newest</button>
          <button>helpful</button>
          <button>relevant</button>
        </div>
        <ReviewListEntry />
        <ReviewListEntry />
        <div className="nav-footer">
          <button>load more</button>
          <button>write a review --></button>
        </div>
      </Fragment>
    );
  }
}

export default ReviewList;