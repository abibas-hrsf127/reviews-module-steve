import React, { Fragment } from 'react';
import RatingTallyEntry from './RatingTallyEntry.jsx';

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
        <div> 4.7 6860 Reviews</div>
        <div>rating breakdown</div>
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