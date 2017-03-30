import React from 'react';
import { shallow } from 'enzyme';
import MainHeaderSidebarToggle from './MainHeaderSidebarToggle';

test('MainHeaderSidebarToggle notifies when clicked', () => {
  let received = false;

  const wrapper = shallow(
    <MainHeaderSidebarToggle />,
    {
      context: {
        $adminlte_layout: {
          toggleMainSidebar: () => {
            received = true;
          },
        },
      },
    },
  );

  wrapper.simulate('click');
  expect(received).toEqual(true);
});
