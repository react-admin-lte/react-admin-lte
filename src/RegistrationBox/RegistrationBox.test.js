import React from 'react';
import { shallow } from 'enzyme';
import RegistrationBox from './RegistrationBox';

it('renders correctly', () => {
  expect(shallow(<RegistrationBox><div /></RegistrationBox>))
    .toMatchSnapshot();
});
