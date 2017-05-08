import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const MailboxControls = ({ children, className }) => {
  const classes = {
    'mailbox-controls': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

MailboxControls.propTypes = propTypes;

export default MailboxControls;
