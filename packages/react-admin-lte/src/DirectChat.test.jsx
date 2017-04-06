import React from 'react';
import { shallow, mount } from 'enzyme';
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

class ToggleContacts extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      toggle: context.$adminlte_directchat.toggleContacts,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.state.toggle();
  }

  toggle() {
    this.state.toggle();
  }

  static contextTypes = {
    $adminlte_directchat: React.PropTypes.shape({
      toggleContacts: React.PropTypes.func,
    }),
  };

  render() {
    return <a onClick={this.toggle} />;
  }
}

test('Shown on toggle', () => {
  const wrapper = mount(<DirectChat style="primary"><ToggleContacts /></DirectChat>);
  expect(wrapper.state('contactsOpen')).toEqual(true);
});

test('Hidden on toggle', () => {
  const wrapper = mount(<DirectChat style="primary"><ToggleContacts /></DirectChat>);
  wrapper.find(ToggleContacts).find('a').simulate('click');
  expect(wrapper.hasClass('direct-chat-contacts-open')).toEqual(false);
});
