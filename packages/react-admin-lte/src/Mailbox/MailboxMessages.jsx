import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
};

const MailboxMessages = ({ children }) => (
  <div className="table-responsive mailbox-messages">
    {children}
  </div>
);

MailboxMessages.propTypes = propTypes;

export default MailboxMessages;
