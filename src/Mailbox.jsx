import React from 'react';
import classNames from 'classnames';

import MailboxControls from './MailboxControls';
import MailboxMessages from './MailboxMessages';
import MailboxAttachments from './MailboxAttachments';
import MailboxReadMessage from './MailboxReadMessage';
import MailboxReadInfo from './MailboxReadInfo';

const propTypes = {
  style: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

const Mailbox = ({
  style,
  className,
  children
}) => {
  const classes = {
    box: true,
    "box-primary": true,
  };
  if (style) {
    classes[`box-${style}`] = true;
    classes["box-primary"] = false;
  }

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

Mailbox.propTypes = propTypes;

Mailbox.Controls = MailboxControls;
Mailbox.Messages = MailboxMessages;
Mailbox.Attachments = MailboxAttachments;
Mailbox.ReadInfo = MailboxReadInfo;
Mailbox.ReadMessage = MailboxReadMessage;

export default Mailbox;
