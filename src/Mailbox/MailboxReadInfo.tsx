import * as PropTypes from 'prop-types';
import * as React from 'react';

const propTypes = {
  children: PropTypes.node,
};

const MailboxReadInfo: React.StatelessComponent<{}> = ({ children }) => (
  <div className="mailbox-read-info">
    {children}
  </div>
);

MailboxReadInfo.propTypes = propTypes;

export default MailboxReadInfo;
