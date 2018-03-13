import React from 'react';
import { shallow } from 'enzyme';
import Skin from './Skin';

it('renders blue', () => {
  expect(shallow((
    <Skin color="blue" className="best-skin">
      <div />
    </Skin>
  ))).toMatchSnapshot();
});
