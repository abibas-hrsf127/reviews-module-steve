import React, { Fragment } from 'react';

const ReviewListEntry = (props) => (
  <div className="collection-item">
    <div>★★★★☆ April 30, 2020</div>
    <div>Title: {props.review.title}</div>
    <div className="text">{props.review.text}</div>
    <div>✓I recommend this product</div>
    <div>user: vanesa4</div>
    <div>Was this review helpful? Yes (0) No (0)</div>
    <div>---------------------------------------</div>
  </div>
);

export default ReviewListEntry;

/*
<Fragment>
  <div>★★★★☆ April 30, 2020</div>
  <div>Title: Awesome shoe!</div>
  <div>Text: Comfortable, it has great style</div>
  <div>✓I recommend this product</div>
  <div>user: vanesa4</div>
  <div>Was this review helpful? Yes (0) No (0)</div>
  <div>---------------------------------------</div>
</Fragment>
*/