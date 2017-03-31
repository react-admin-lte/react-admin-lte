import React from 'react';
import { shallow } from 'enzyme';
import DirectChat from './DirectChat';

test('Passes message on form submit', () => {
  const message = 'hey!';
  let received = null;
  const wrapper = shallow(<DirectChat
    style="primary"
    onSubmitMessage={(val) => { received = val; }}
  />);
  wrapper.find('[name="message"]').simulate('change', {
    target: {
      value: message,
    },
  });
  wrapper.find('Form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(received).toEqual(message);
});
