import React from 'react';
import { mount } from 'enzyme';
import Box from './Box';
import BoxRemoveButton from './BoxRemoveButton';

test('Box notified when clicked', () => {
  let received = false;

  class BoxFake extends React.Component {
    static childContextTypes = Box.childContextTypes;

    getChildContext() {
      return {
        $adminlte_box: {
          onRemove: () => { received = true; },
        },
      };
    }

    render() {
      return (
        <div>
          <BoxRemoveButton />
        </div>
      );
    }
  }

  const wrapper = mount(<BoxFake />);

  wrapper.find(BoxRemoveButton).simulate('click');
  expect(received).toEqual(true);
});
