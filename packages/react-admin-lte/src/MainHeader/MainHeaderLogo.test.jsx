import React from 'react';
import { shallow } from 'enzyme';
import MainHeaderLogo from './MainHeaderLogo';

test('calls onClick', () => {
  let called = false;
  const wrapper = shallow(<MainHeaderLogo
    onClick={() => { called = true; }}
  />);
  wrapper.simulate('click');
  expect(called).toEqual(true);
});

