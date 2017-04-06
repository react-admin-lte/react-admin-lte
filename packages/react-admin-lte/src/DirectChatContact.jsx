import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
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
