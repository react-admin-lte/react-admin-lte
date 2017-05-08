import * as PropTypes from 'prop-types';
import * as React from 'react';

const propTypes = {
  children: PropTypes.node,
};

const MailboxMessages: React.StatelessComponent<{}> = ({ children }) => (
  <div className="table-responsive mailbox-messages">
    {children}
  </div>
);

MailboxMessages.propTypes = propTypes;

export default MailboxMessages;
