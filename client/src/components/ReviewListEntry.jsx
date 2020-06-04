import React, { Fragment } from "react";
import styled from "styled-components";

const CollectionItem = styled.div`
  border-bottom: 1px solid #000;
  position: relative;
  padding-bottom: 40px;
  margin-top: 40px;
`;
const Stars = styled.div`
  color: #767677;
  display: inline-flex;
`;
const Time = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: #767677;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 14px 0;
`;
const Title = styled.header`
  margin: 20px 0 0 0;
  padding: 0;
  font-size: 18px;
  line-height: 16px;
  font-family: AdineuePRO, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
`;
const Text = styled.div`
  margin-top: 10px 0 0 0;
`;
const Recommend = styled.span`
  margin-top: 20px 0 0 0;
`;
const DontRecommend = styled.span`
  // display: none;
  margin: 20px 0 0 0;
`;
const User = styled.div`
  text-transform: uppercase;
  font-family: AdihausDIN, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0 14px 0;
`;

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.getStars = this.getStars.bind(this);
  }

  getStars(numIsHelpful) {
    if (this.props.review.isHelpful > 50 && this.props.reviewisHelpful < 100) {
      return "★☆☆☆☆";
    } else if (this.props.review.isHelpful > 100 && this.props.review.isHelpful < 200) {
      return "★★☆☆☆";
    } else if (this.props.review.isHelpful > 200 && this.props.reviewisHelpful < 300) {
      return "★★★☆☆";
    } else if (this.props.review.isHelpful > 400 && this.props.review.isHelpful < 500) {
      return "★★★★☆";
    } else {
      return "★★★★★";
    }
  }

  render() {
    const review = this.props.review;
    const datePlaceholder = review.createdAt.split('-');
    console.log(datePlaceholder)
    const dateCreated = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][Number(datePlaceholder[1])] + ' ' + (Number(datePlaceholder[2].slice(0, 2))).toString() + ', ' + datePlaceholder[0];
    return (
      <CollectionItem>
        <Stars>{this.getStars(review.isHelpful)}</Stars>
        <Time>{dateCreated}</Time>
        <Title>{review.subject}</Title>
        <Text>{review.description}</Text>
        <>
          {review.isRecommended ? (
            <Recommend>✓ I recommend this product</Recommend>
          ) : (
            <DontRecommend>x I do not recommend this product</DontRecommend>
          )}
        </>
        <User>{review.nickname}</User>
        <div>
          Was this review helpful? Yes ({review.isHelpful}) No (
          {review.isNotHelpful})
        </div>
      </CollectionItem>
    );
  }
}

export default ReviewListEntry;
