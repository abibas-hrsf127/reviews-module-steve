/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../client/src/components/App.jsx';

// import jsdom from 'jsdom';
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.document = doc;
// global.window = doc.defaultView;

describe('Rendering Test', () => {
  it('should render', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.exists()).toBe(true);
  });
});