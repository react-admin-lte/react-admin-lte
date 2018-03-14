import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

it('renders default', () => {
  expect(shallow(<Content><div /></Content>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<Content component="div"><div /></Content>))
    .toMatchSnapshot();
});
