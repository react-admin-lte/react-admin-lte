import React from 'react';
import { mount } from 'enzyme';
import Box from './Box';
import BoxCollapsedToggleButton from './BoxCollapsedToggleButton';

test('Box notified when clicked', () => {
  let received = false;

  class BoxFake extends React.Component {
    static childContextTypes = Box.childContextTypes;

    getChildContext() {
      return {
        $adminlte_box: {
          onCollapseToggle: () => { received = true; },
        },
      };
    }

    render() {
      return (
        <div>
          <BoxCollapsedToggleButton />
        </div>
      );
    }
  }

  const wrapper = mount(<BoxFake />);

  wrapper.find(BoxCollapsedToggleButton).simulate('click');
  expect(received).toEqual(true);
});
