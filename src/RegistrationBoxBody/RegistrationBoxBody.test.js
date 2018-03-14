import React from 'react';
import { shallow } from 'enzyme';
import RegistrationBoxBody from './RegistrationBoxBody';

it('renders correctly', () => {
  expect(shallow(<RegistrationBoxBody><div /></RegistrationBoxBody>))
    .toMatchSnapshot();
});
