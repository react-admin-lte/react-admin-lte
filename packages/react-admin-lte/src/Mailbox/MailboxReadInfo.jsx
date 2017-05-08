import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
};

const MailboxReadInfo = ({ children }) => (
  <div className="mailbox-read-info">
    {children}
  </div>
);

MailboxReadInfo.propTypes = propTypes;

export default MailboxReadInfo;
