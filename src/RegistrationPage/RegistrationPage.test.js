import React from 'react';
import { shallow } from 'enzyme';
import RegistrationPage from './RegistrationPage';

it('renders correctly', () => {
  expect(shallow(<RegistrationPage><div /></RegistrationPage>))
    .toMatchSnapshot();
});
