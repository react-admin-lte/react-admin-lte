import React from 'react';
import { shallow } from 'enzyme';
import BoxTitle from './BoxTitle';

it('renders default', () => {
  expect(shallow(<BoxTitle><div /></BoxTitle>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<BoxTitle component="h2"><div /></BoxTitle>))
    .toMatchSnapshot();
});
