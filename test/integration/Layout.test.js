import React from 'react';
import { mount } from 'enzyme';
import Layout from '../../src/Layout';
import SidebarToggle from '../../src/SidebarToggle';

it('sidebar toggled on click', () => {
  const wrapper = mount(<Layout className="layout-div"><SidebarToggle /></Layout>);
  wrapper.find(SidebarToggle).simulate('click');
  expect(wrapper.state('sidebarCollapsed')).toEqual(true);
});
