import React, { Fragment } from 'react';
import RatingTallyEntry from './RatingTallyEntry';

class RatingTally extends React.Component {
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
        <div>RATINGS & REVIEWS</div>
        <div> 4.7 6860 Reviews</div>
        <div>RATING BREAKDOWN</div>
        <RatingTallyEntry />
        <RatingTallyEntry />
        <RatingTallyEntry />
        <RatingTallyEntry />
        <RatingTallyEntry />
      </Fragment>
    );
  }
}

export default RatingTally;