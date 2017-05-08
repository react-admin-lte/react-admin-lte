import * as PropTypes from 'prop-types';
import * as React from 'react';

import MailboxAttachment from './MailboxAttachment';

export interface MailboxAttachmentsComponent
  extends React.StatelessComponent<{}> {
    Item: typeof MailboxAttachment;
  };

const propTypes = {
  children: PropTypes.node,
};

const MailboxAttachments = (({ children }) => (
  <ul className="mailbox-attachments clearfix">
    {children}
  </ul>
)) as MailboxAttachmentsComponent;

MailboxAttachments.propTypes = propTypes;

MailboxAttachments.Item = MailboxAttachment;

export default MailboxAttachments;
