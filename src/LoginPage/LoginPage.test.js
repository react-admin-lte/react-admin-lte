import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

it('renders correctly', () => {
  expect(shallow(<LoginPage><div /></LoginPage>))
    .toMatchSnapshot();
});
