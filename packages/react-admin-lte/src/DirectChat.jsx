import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import Badge from './Badge';
import Box from './Box';
import DirectChatToggleContactsButton from './DirectChatToggleContactsButton';
import DirectChatMessageList from './DirectChatMessageList';
import DirectChatMessage from './DirectChatMessage';
import DirectChatImage from './DirectChatImage';
import DirectChatText from './DirectChatText';
import DirectChatContactList from './DirectChatContactList';
import DirectChatContact from './DirectChatContact';
import DirectChatContactImage from './DirectChatContactImage';
import DirectChatContactInfo from './DirectChatContactInfo';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  messageNumber: PropTypes.number,
  style: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']).isRequired,
  onSubmitMessage: PropTypes.func,
  title: PropTypes.node,
};

const childContextTypes = {
  $adminlte_directchat: PropTypes.shape({
    toggleContacts: PropTypes.func,
  }),
};

class DirectChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsOpen: false,
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getChildContext() {
    return {
      $adminlte_directchat: {
        toggleContacts: () => {
          this.setState({
            contactsOpen: !this.state.contactsOpen,
          });
        },
      },
    };
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmitMessage(this.state.message);
  }

  render() {
    const classes = {
      'direct-chat': true,
      'direct-chat-contacts-open': this.state.contactsOpen,
    };

    classes[`direct-chat-${this.props.style}`] = true;

    const badgeBg = {
      'light-blue': this.props.style === 'primary',
      green: this.props.style === 'success',
      yellow: this.props.style === 'warning',
      red: this.props.style === 'danger',
    };

    return (
      <Box
        style={this.props.style}
        className={classNames(this.props.className, classes)}
      >
        <Box.Header border>
          <Box.Title>{this.props.title}</Box.Title>
          <Box.Tools>
            <OverlayTrigger
              overlay={
                <Tooltip id="direct-chat-messages-tooltip">
                  {this.props.messageNumber} New Messages
                </Tooltip>
              }
              placement="top"
              trigger={['focus', 'hover']}
            >
              <span>
                <Badge background={classNames(badgeBg)}>
                  {this.props.messageNumber}
                </Badge>
              </span>
            </OverlayTrigger>
            <Box.CollapsedToggleButton />
            <DirectChatToggleContactsButton />
            <Box.RemoveButton />
          </Box.Tools>
        </Box.Header>
        <Box.Body>{this.props.children}</Box.Body>
        <Box.Footer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup>
              <FormControl
                name="message"
                onChange={this.handleChange}
                placeholder="Type Message..."
                type="text"
                value={this.state.message}
              />
              <InputGroup.Button>
                <Button
                  type="submit"
                  bsStyle={this.props.style}
                >
                  Send
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </Form>
        </Box.Footer>
      </Box>
    );
  }
}

DirectChat.propTypes = propTypes;
DirectChat.childContextTypes = childContextTypes;

DirectChat.MessageList = DirectChatMessageList;
DirectChat.Message = DirectChatMessage;
DirectChat.Image = DirectChatImage;
DirectChat.Text = DirectChatText;
DirectChat.ContactList = DirectChatContactList;
DirectChat.Contact = DirectChatContact;
DirectChat.ContactImage = DirectChatContactImage;
DirectChat.ContactInfo = DirectChatContactInfo;

export default DirectChat;
