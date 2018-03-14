import React from 'react';
import { shallow } from 'enzyme';
import LoginLogo from './LoginLogo';

it('renders default', () => {
  expect(shallow(<LoginLogo>Mine!</LoginLogo>))
    .toMatchSnapshot();
});
