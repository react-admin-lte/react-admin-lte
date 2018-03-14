import React from 'react';
import { shallow } from 'enzyme';
import MainHeader from './MainHeader';

it('renders default', () => {
  expect(shallow(<MainHeader><div /></MainHeader>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<MainHeader component="div"><div /></MainHeader>))
    .toMatchSnapshot();
});

