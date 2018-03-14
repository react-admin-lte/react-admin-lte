import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

it('renders correctly', () => {
  expect(shallow((
    <Label
      backgroundColor="red"
    >
      <div />
    </Label>
  ))).toMatchSnapshot();
});

