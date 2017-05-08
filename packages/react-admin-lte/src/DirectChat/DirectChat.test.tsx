import * as PropTypes from 'prop-types';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import DirectChat from './DirectChat';
import DirectChatMessage from './DirectChatMessage';
import DirectChatMessageList from './DirectChatMessageList';
import DirectChatImage from './DirectChatImage';
import DirectChatText from './DirectChatText';
import DirectChatContact from './DirectChatContact';
import DirectChatContactList from './DirectChatContactList';
import DirectChatContactImage from './DirectChatContactImage';
import DirectChatContactInfo from './DirectChatContactInfo';

test('Passes message on form submit', () => {
  const message = 'hey!';
  let received: string = '';
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

interface ToggleContactsState {
  toggle: () => void;
};

class ToggleContacts extends React.Component<{}, ToggleContactsState> {
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
    $adminlte_directchat: PropTypes.shape({
      toggleContacts: PropTypes.func,
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

test('Renders default', () => {
  const component = renderer.create(
    <DirectChat
      onSubmitMessage={() => {}}
      messageNumber={3}
      style="primary"
      title="Direct chat"
    >
      <DirectChatMessageList>
        <DirectChatMessage
          name="Alexander Pierce"
          timestamp="23 Jan 2:00 pm"
        >
          <DirectChatImage src="alexander.jpg" alt="Message User Image" />
          <DirectChatText>Is this really for free? That's unbelievable!</DirectChatText>
        </DirectChatMessage>
        <DirectChatMessage
          name="Sarah Bullock"
          timestamp="23 Jan 2:05 pm"
        >
          <DirectChatImage src="sarah.jpg" alt="Message User Image" />
          <DirectChatText>You better believe it!</DirectChatText>
        </DirectChatMessage>
      </DirectChatMessageList>
      <DirectChatContactList>
        <DirectChatContact onClick={() => {}}>
          <DirectChatContactImage src="alexander.jpg" alt="User Image" />
          <DirectChatContactInfo
            name="Count Dracula"
            date="2/28/2015"
          >
            How have you been? I was...
          </DirectChatContactInfo>
        </DirectChatContact>
      </DirectChatContactList>
    </DirectChat>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
