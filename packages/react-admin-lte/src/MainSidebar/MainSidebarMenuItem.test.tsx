import * as React from 'react';
import { shallow } from 'enzyme';
import MainSidebarMenuItem from './MainSidebarMenuItem';

test('calls onClick', () => {
  let called = false;
  const wrapper = shallow(<MainSidebarMenuItem
    onClick={() => { called = true; }}
  />);
  wrapper.find('a').simulate('click');
  expect(called).toEqual(true);
});
