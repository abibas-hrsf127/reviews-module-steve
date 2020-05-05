import React, { Fragment } from 'react';

class ReviewListEntry extends React.Component {
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
        <div>★★★★☆ April 30, 2020</div>
        <div>Title: Awesome shoe!</div>
        <div>Text: Comfortable, it has great style</div>
        <div>✓I recommend this product</div>
        <div>user: vanesa4</div>
        <div>Was this review helpful? Yes (0) No (0)</div>
        <div>---------------------------------------</div>
      </Fragment>
    );
  }
}

export default ReviewListEntry;