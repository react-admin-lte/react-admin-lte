import * as PropTypes from 'prop-types';
import * as React from 'react';

const propTypes = {
  children: PropTypes.node,
};

const MailboxReadMessage: React.StatelessComponent<{}> = ({ children }) => (
  <div className="mailbox-read-message">
    {children}
  </div>
);

MailboxReadMessage.propTypes = propTypes;

export default MailboxReadMessage;
