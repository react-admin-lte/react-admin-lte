import React from 'react';
import { mount } from 'enzyme';
import BoxRemoveButton from './BoxRemoveButton';

test('Box notified when clicked', () => {
  let received = false;

  const wrapper = mount(
    <BoxRemoveButton />,
    {
      context: {
        $adminlte_box: {
          onRemove: () => { received = true; },
        },
      },
    },
  );

  wrapper.simulate('click');
  expect(received).toEqual(true);
});
