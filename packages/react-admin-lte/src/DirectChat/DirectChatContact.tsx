import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const DirectChatContact: React.StatelessComponent<Props> = ({
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
