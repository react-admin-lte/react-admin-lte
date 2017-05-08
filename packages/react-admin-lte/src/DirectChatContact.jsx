import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const DirectChatContact = ({
  children,
  className,
  onClick,
}) =>
  <li
    className={className}
    onClick={onClick}
    role="button"
  >
    {children}
  </li>;

DirectChatContact.propTypes = propTypes;

export default DirectChatContact;
