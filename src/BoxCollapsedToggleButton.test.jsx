import React from 'react';
import { shallow } from 'enzyme';
import BoxCollapsedToggleButton from './BoxCollapsedToggleButton';

test('Box notified when clicked', () => {
  let received = false;

  const wrapper = shallow(
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
