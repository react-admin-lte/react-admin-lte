import React from 'react';
import { shallow } from 'enzyme';
import LoginBox from './LoginBox';

it('renders correctly', () => {
  expect(shallow(<LoginBox><div /></LoginBox>))
    .toMatchSnapshot();
});
