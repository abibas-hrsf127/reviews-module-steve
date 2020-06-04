import React, { Fragment } from "react";
import styled from "styled-components";
import StatSlider from "./StatSlider.jsx";

const Header = styled.div`
  margin: 20px 0 0 0;
`;
const Percent = styled.header`
  margin: 0;
  padding: 0;
  font-size: 56px;
  line-height: 48px;
  font-family: AdineuePRO, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
`;

class StatChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
    };
  }

  render() {
    const { reviews } = this.state;
    const reviewsList = reviews.reviews;
    let totalRecommended = 0;
    let size = 0;
    let width = 0;
    let comfort = 0;
    let quality = 0;

    for (var i=0; i< reviewsList.length; i++) {
      if (reviewsList[i].isRecommended === true) totalRecommended += 1;
      if (reviewsList[i].ratingSize === 'a size too small') {
        size += 0;
      } else if (reviewsList[i].ratingSize === '1/2 a size too small') {
        size += 25;
      } else if (reviewsList[i].ratingSize === 'Perfect') {
        size += 50;
      } else if (reviewsList[i].ratingSize === '1/2 a size too big') {
        size += 75;
      } else {
        size += 100;
      }
      if (reviewsList[i].ratingWidth === 'Too narrow') {
        width += 0;
      } else if (reviewsList[i].ratingWidth === 'Slightly narrow') {
        width += 25;
      } else if (reviewsList[i].ratingWidth === 'Perfect') {
        width += 50;
      } else if (reviewsList[i].ratingWidth === 'Slightly wide') {
        width += 75;
      } else {
        width += 100;
      }
      if (reviewsList[i].ratingComfort === 'Uncomfortable') {
        comfort += 0;
      } else if (reviewsList[i].ratingComfort === 'Slightly uncomfortable') {
        comfort += 25;
      } else if (reviewsList[i].ratingComfort === 'Ok') {
        comfort += 50;
      } else if (reviewsList[i].ratingComfort === 'Comfortable') {
        comfort += 75;
      } else {
        comfort += 100;
      }
      if (reviewsList[i].ratingQuality === 'Poor') {
        quality += 0;
      } else if (reviewsList[i].ratingQuality === 'Below average') {
        quality += 25;
      } else if (reviewsList[i].ratingQuality === 'What I expected') {
        quality += 50;
      } else if (reviewsList[i].ratingQuality === 'Pretty great') {
        quality += 75;
      } else {
        quality += 100;
      }
    }
    const percentRecommended = Math.round( totalRecommended / reviewsList.length * 100 ) + '%';
    const sizePercent = size / reviewsList.length;
    const  widthPercent = width / reviewsList.length;
    const comfortPercent = comfort / reviewsList.length;
    const qualityPercent = comfort / reviewsList.length;

    return (
      <Fragment>
        <Header>
          <Percent>
            {reviews.reviews.length === 0 ? '0%' : percentRecommended}
          </Percent>
          <span>of customers recommend this product</span>
        </Header>
        <StatSlider
          title={"size"}
          labels={["small", "perfect", "large"]}
          prct={sizePercent}
        />
        <StatSlider
          title={"width"}
          labels={["narrow", "perfect", "wide"]}
          prct={widthPercent}
        />
        <StatSlider
          title={"comfort"}
          labels={["poor", "", "perfect"]}
          prct={comfortPercent}
        />
        <StatSlider
          title={"quality"}
          labels={["poor", "", "perfect"]}
          prct={qualityPercent}
        />
      </Fragment>
    );
  }
}

export default StatChart;
