import React from 'react';
import { mount } from 'enzyme';
import Layout from '../../src/Layout';
import SidebarToggle from '../../src/SidebarToggle';

it('sidebar toggled on click', () => {
  let received = false;
  const wrapper = mount(
    <Layout className="layout-div" onToggle={() => { received = true; }}>
      <SidebarToggle />
    </Layout>
  );
  wrapper.find(SidebarToggle).simulate('click');
  expect(received).toEqual(true);
});
