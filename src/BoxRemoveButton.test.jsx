import React from 'react';
import { shallow } from 'enzyme';
import BoxRemoveButton from './BoxRemoveButton';

test('Box notified when clicked', () => {
  let received = false;

  const wrapper = shallow(
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
