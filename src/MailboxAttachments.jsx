import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const MailboxAttachments = ({ children }) => (
  <ul className="mailbox-attachments clearfix">
    {children}
  </ul>
);

MailboxAttachments.propTypes = propTypes;

export default MailboxAttachments;
