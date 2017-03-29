import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import BoxToolButton from './BoxToolButton';

const contextTypes = {
  $adminlte_directchat: React.PropTypes.shape({
    toggleContacts: React.PropTypes.func,
  }),
};

const DirectChatToggleContactsButton = (undefined, context) => {
  const tooltip = (<Tooltip id="direct-chat-contacts-tooltip">
    Contacts
  </Tooltip>);

  return (
    <OverlayTrigger
      overlay={tooltip}
      placement="top"
      trigger={['focus', 'hover']}
    >
      <span>
        <BoxToolButton onClick={context.$adminlte_directchat.toggleContacts}>
          <FontAwesome name="comments" />
        </BoxToolButton>
      </span>
    </OverlayTrigger>
  );
};

DirectChatToggleContactsButton.contextTypes = contextTypes;

export default DirectChatToggleContactsButton;
