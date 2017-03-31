import React from 'react';
import { shallow } from 'enzyme';
import DataTableHeaderCell from './DataTableHeaderCell';

test('calls onClick', () => {
  let called = false;
  const wrapper = shallow(<DataTableHeaderCell
    onClick={() => { called = true; }}
  />);
  wrapper.simulate('click');
  expect(called).toEqual(true);
});
