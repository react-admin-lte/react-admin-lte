import React from 'react';
import { shallow } from 'enzyme';
import BoxBody from './BoxBody';

it('renders default', () => {
  expect(shallow(<BoxBody><div /></BoxBody>))
    .toMatchSnapshot();
});

it('renders default', () => {
  expect(shallow(<BoxBody noPadding><div /></BoxBody>))
    .toMatchSnapshot();
});
