import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import axios from 'axios';
jest.mock('axios');

import App from '../client/src/components/App.jsx';
import RatingTally from '../client/src/components/RatingTally.jsx';
import StatChart from '../client/src/components/StatChart.jsx';
import ReviewList from '../client/src/components/ReviewList.jsx';

describe('<App />', () => {
  it('renders three components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RatingTally)).to.have.lengthOf(1);
    expect(wrapper.find(StatChart)).to.have.lengthOf(1);
    expect(wrapper.find(ReviewList)).to.have.lengthOf(1);
  });

  // it('should fetch reviews', () => {
  //   const reviews = [{ name: 'Bob' }];
  //   const resp = { data: reviews };
  //   // axios.get.mockResolvedValue(resp);
  // or you could use the following depending on your use case:
  //   axios.get.mockImplementation(() => Promise.resolve(resp));
  //   return true;
  //   // return App.all().then(data => expect(data).toEqual(reviews));
  // });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <App>
  //       <div className="unique" />
  //     </App>
  //   ));
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});