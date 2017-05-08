import PropTypes from 'prop-types';
import React from 'react';

import MailboxAttachment from './MailboxAttachment';

const propTypes = {
  children: PropTypes.node,
};

const MailboxAttachments = ({ children }) => (
  <ul className="mailbox-attachments clearfix">
    {children}
  </ul>
);

MailboxAttachments.propTypes = propTypes;

MailboxAttachments.Item = MailboxAttachment;

export default MailboxAttachments;
