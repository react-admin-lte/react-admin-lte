import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const MailboxControls = ({ children }) => (
  <div className="mailbox-controls">
    {children}
  </div>
);

MailboxControls.propTypes = propTypes;

export default MailboxControls;
