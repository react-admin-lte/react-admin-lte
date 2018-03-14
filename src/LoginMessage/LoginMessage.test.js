import React from 'react';
import { shallow } from 'enzyme';
import LoginMessage from './LoginMessage';

it('renders default', () => {
  expect(shallow(<LoginMessage>Sign in</LoginMessage>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<LoginMessage component="div">Sign in</LoginMessage>))
    .toMatchSnapshot();
});
