import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';
import { Badge as BsBadge } from 'react-bootstrap';

export interface Props {
  background?: 'light-blue' | 'red' | 'green' | 'yellow';
  className?: string;
};

const propTypes = {
  background: PropTypes.oneOf(['light-blue', 'red', 'green', 'yellow']),
  className: PropTypes.string,
  children: PropTypes.node,
};

const Badge: React.StatelessComponent<Props> = ({
  background,
  className,
  children,
}) => {
  const classes = {};

  if (background) {
    classes[`bg-${background}`] = true;
  }

  return (
    <BsBadge className={classNames(className, classes)}>{children}</BsBadge>
  );
};

Badge.propTypes = propTypes;

export default Badge;
