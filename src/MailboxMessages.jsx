import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const MailboxMessages = ({ children }) => (
  <div className="mailbox-messages">
    {children}
  </div>
);

MailboxMessages.propTypes = propTypes;

export default MailboxMessages;
