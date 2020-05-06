/* eslint-disable func-style */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

// Components
import WelcomeMessage from '../client/src/components/WelcomeMessage';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<WelcomeMessage />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});