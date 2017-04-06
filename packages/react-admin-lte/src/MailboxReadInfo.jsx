import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const MailboxReadInfo = ({ children }) => (
  <div className="mailbox-read-info">
    {children}
  </div>
);

MailboxReadInfo.propTypes = propTypes;

export default MailboxReadInfo;
