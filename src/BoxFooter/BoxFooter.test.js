import React from 'react';
import { shallow } from 'enzyme';
import BoxFooter from './BoxFooter';

it('renders default', () => {
  expect(shallow(<BoxFooter><div /></BoxFooter>))
    .toMatchSnapshot();
});
