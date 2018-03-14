import React from 'react';
import { shallow } from 'enzyme';
import BoxHeader from './BoxHeader';

it('renders default', () => {
  expect(shallow(<BoxHeader><div /></BoxHeader>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<BoxHeader border><div /></BoxHeader>))
    .toMatchSnapshot();
});
