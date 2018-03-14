import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

it('renders correctly', () => {
  expect(shallow((
    <Badge
      backgroundColor="red"
    >
      <div />
    </Badge>
  ))).toMatchSnapshot();
});

