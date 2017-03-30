import React from 'react';
import { mount } from 'enzyme';
import BoxCollapsedToggleButton from './BoxCollapsedToggleButton';

test('Box notified when clicked', () => {
  let received = false;

  const wrapper = mount(
    <BoxCollapsedToggleButton />,
    {
      context: {
        $adminlte_box: {
          onCollapseToggle: () => { received = true; },
        },
      },
    },
  );

  wrapper.simulate('click');
  expect(received).toEqual(true);
});
