import React from 'react';
import { shallow } from 'enzyme';
import LoginBoxBody from './LoginBoxBody';

it('renders correctly', () => {
  expect(shallow(<LoginBoxBody><div /></LoginBoxBody>))
    .toMatchSnapshot();
});
