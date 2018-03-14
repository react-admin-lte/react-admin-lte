import React from 'react';
import { shallow } from 'enzyme';
import BoxTools from './BoxTools';

it('renders default', () => {
  expect(shallow(<BoxTools><div /></BoxTools>))
    .toMatchSnapshot();
});

