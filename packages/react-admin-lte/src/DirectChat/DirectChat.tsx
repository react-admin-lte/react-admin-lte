import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import Badge from '../Badge';
import Box from '../Box';
import DirectChatToggleContactsButton from './DirectChatToggleContactsButton';
import DirectChatMessageList from './DirectChatMessageList';
import DirectChatMessage from './DirectChatMessage';
import DirectChatImage from './DirectChatImage';
import DirectChatText from './DirectChatText';
import DirectChatContactList from './DirectChatContactList';
import DirectChatContact from './DirectChatContact';
import DirectChatContactImage from './DirectChatContactImage';
import DirectChatContactInfo from './DirectChatContactInfo';

export interface Props {
  className?: string;
  messageNumber?: number;
  style: 'primary' | 'success' | 'warning' | 'danger';
  onSubmitMessage?: (message: string) => void;
  title?: React.ReactNode;
};

export interface State {
  contactsOpen: boolean;
  message: string;
};

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

class DirectChat extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      contactsOpen: false,
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = propTypes;
  static childContextTypes = childContextTypes;

  static MessageList: typeof DirectChatMessageList;
  static Message: typeof DirectChatMessage;
  static Image: typeof DirectChatImage;
  static Text: typeof DirectChatText;
  static ContactList: typeof DirectChatContactList;
  static Contact: typeof DirectChatContact;
  static ContactImage: typeof DirectChatContactImage;
  static ContactInfo: typeof DirectChatContactInfo;

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

    if (this.props.onSubmitMessage) {
      this.props.onSubmitMessage(this.state.message);
    }
  }

  renderBadge() {
    const {
      messageNumber,
      style
    } = this.props;

    switch (style) {
      case 'primary':
        return <Badge background="light-blue">{messageNumber}</Badge>;
      case 'success':
        return <Badge background="green">{messageNumber}</Badge>;
      case 'warning':
        return <Badge background="yellow">{messageNumber}</Badge>;
      case 'danger':
        return <Badge background="red">{messageNumber}</Badge>;
      default:
        return <Badge>{messageNumber}</Badge>;
    }
  }

  render() {
    const classes = {
      'direct-chat': true,
      'direct-chat-contacts-open': this.state.contactsOpen,
    };

    classes[`direct-chat-${this.props.style}`] = true;

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
              <span>{this.renderBadge()}</span>
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

DirectChat.MessageList = DirectChatMessageList;
DirectChat.Message = DirectChatMessage;
DirectChat.Image = DirectChatImage;
DirectChat.Text = DirectChatText;
DirectChat.ContactList = DirectChatContactList;
DirectChat.Contact = DirectChatContact;
DirectChat.ContactImage = DirectChatContactImage;
DirectChat.ContactInfo = DirectChatContactInfo;

export default DirectChat;
