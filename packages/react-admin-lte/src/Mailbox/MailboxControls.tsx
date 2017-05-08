import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const MailboxControls: React.StatelessComponent<Props> =
  ({ children, className }) => {
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
