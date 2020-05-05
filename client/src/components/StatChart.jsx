import React, { Fragment } from 'react';
import StatSlider from './StatSlider.jsx';

class StatChart extends React.Component {
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
        <div>97%</div>
        <div>of customers recommend this product</div>
        <StatSlider />
        <StatSlider />
        <StatSlider />
        <StatSlider />
      </Fragment>
    );
  }
}

export default StatChart;