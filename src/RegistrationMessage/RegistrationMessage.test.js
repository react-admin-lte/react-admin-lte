import React from 'react';
import { shallow } from 'enzyme';
import RegistrationMessage from './RegistrationMessage';

it('renders default', () => {
  expect(shallow(<RegistrationMessage>Sign in</RegistrationMessage>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<RegistrationMessage component="div">Sign in</RegistrationMessage>))
    .toMatchSnapshot();
});
