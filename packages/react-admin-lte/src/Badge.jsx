import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Badge as BsBadge } from 'react-bootstrap';

const propTypes = {
  background: PropTypes.oneOf(['light-blue', 'red', 'green', 'yellow']),
  className: PropTypes.string,
  children: PropTypes.node,
};

const Badge = ({
  background,
  className,
  children,
}) => {
  const classes = {
    badge: true,
  };

  if (background) {
    classes[`bg-${background}`] = true;
  }

  return (
    <BsBadge bsClass={classNames(className, classes)}>{children}</BsBadge>
  );
};

Badge.propTypes = propTypes;

export default Badge;
