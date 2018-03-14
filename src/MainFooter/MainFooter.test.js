import React from 'react';
import { shallow } from 'enzyme';
import MainFooter from './MainFooter';

it('renders default', () => {
  expect(shallow(<MainFooter><div /></MainFooter>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<MainFooter component="div"><div /></MainFooter>))
    .toMatchSnapshot();
});

