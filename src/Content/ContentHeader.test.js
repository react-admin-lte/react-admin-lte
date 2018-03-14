import React from 'react';
import { shallow } from 'enzyme';
import ContentHeader from './ContentHeader';

it('renders default', () => {
  expect(shallow(<ContentHeader />))
    .toMatchSnapshot();
});

it('renders title', () => {
  expect(shallow(<ContentHeader title="Super important" />))
    .toMatchSnapshot();
});

it('renders subtitle', () => {
  expect(shallow(<ContentHeader subtitle="But only a little" />))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<ContentHeader component="div" />))
    .toMatchSnapshot();
});
