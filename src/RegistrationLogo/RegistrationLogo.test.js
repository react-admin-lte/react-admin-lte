import React from 'react';
import { shallow } from 'enzyme';
import RegistrationLogo from './RegistrationLogo';

it('renders default', () => {
  expect(shallow(<RegistrationLogo>Mine!</RegistrationLogo>))
    .toMatchSnapshot();
});
