import React from 'react';
import { shallow } from 'enzyme';
import BoxToolButton from '../Box/BoxToolButton';
import DirectChatToggleContactsButton from './DirectChatToggleContactsButton';

test('DirectChatToggleContactsButton notifies DirectChat when clicked', () => {
  let received = false;

  const wrapper = shallow(
    <DirectChatToggleContactsButton />,
    {
      context: {
        $adminlte_directchat: {
          toggleContacts: () => { received = true; },
        },
      },
    },
  );

  wrapper.find(BoxToolButton).simulate('click');
  expect(received).toEqual(true);
});
