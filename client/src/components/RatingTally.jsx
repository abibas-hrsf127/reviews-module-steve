import React, { Fragment } from "react";
import styled from "styled-components";
import RatingTallyEntry from "./RatingTallyEntry.jsx";

const StarRating = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2ada71;
`;
const OutofFive = styled.div`
  font-size: 56px;
  font-weight: 700;
  text-align: right;
  padding-right: 8px;
`;
const Stars = styled.div`
  flex-flow: column wrap;
  justify-content: space-between;
  padding: 8px 0 8px 8px;
`;
const RatingBreakdown = styled.div`
  border-bottom: 1px solid #ebedee;
  padding-bottom: 20px;
  margin-top: 20px;
`;
const Header = styled.header`
  font-size: 18px;
  line-height: 16px;
  font-family: AdineuePRO, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

class RatingTally extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starCount: this.props.reviews.ratingOverall,
      ratingOverall: this.props.reviews.ratingOverall,
      leng: this.props.reviews.reviews,

    }
    this.getStars = this.getStars.bind(this);
  }

  getStars(stars) {
    if (stars === 5) {
      return <div>★★★★★</div>
    } else if (stars === 4) {
      return <div>★★★★☆</div>
    } else if (stars === 3 ) {
      return <div>★★★☆☆</div>
    } else if (stars === 2 ) {
      return <div>★★☆☆☆</div>
    } else if (stars === 1 ) {
      return <div>★☆☆☆☆</div>
    }
    
  }
  render() {
    const { starCount, ratingOverall, leng} = this.state;
        
    return (
      <>
        <StarRating>
          <OutofFive>
            {ratingOverall === 5
              ? ratingOverall - 0.4
              : ratingOverall + 0.7}
          </OutofFive>
          <Stars>
            {this.getStars(starCount)}
            <div>
              <strong>{leng.length}</strong> Reviews
            </div>
          </Stars>
        </StarRating>
        <RatingBreakdown>
          <Header>rating breakdown</Header>
          <RatingTallyEntry star={5} percent={100} count={5} />
          <RatingTallyEntry star={4} percent={80} count={4} />
          <RatingTallyEntry star={3} percent={20} count={1} />
          <RatingTallyEntry star={2} percent={0} count={0} />
          <RatingTallyEntry star={1} percent={20} count={1} />
        </RatingBreakdown>
      </>
    );
  }
}

export default RatingTally;
