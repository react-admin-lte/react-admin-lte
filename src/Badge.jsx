import React from 'react';
import classNames from 'classnames';
import { Badge as BsBadge } from 'react-bootstrap';

const propTypes = {
  background: React.PropTypes.oneOf(['light-blue', 'red', 'green', 'yellow']),
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

const Badge = ({
  background,
  className,
  children,
}) => {
  const classes = {
    badge: true,
  };
  classes[`bg-${background}`] = true;

  return (
    <BsBadge bsClass={classNames(className, classes)}>{children}</BsBadge>
  );
};

Badge.propTypes = propTypes;

export default Badge;
