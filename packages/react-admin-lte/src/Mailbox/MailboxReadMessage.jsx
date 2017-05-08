import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
};

const MailboxReadMessage = ({ children }) => (
  <div className="mailbox-read-message">
    {children}
  </div>
);

MailboxReadMessage.propTypes = propTypes;

export default MailboxReadMessage;
