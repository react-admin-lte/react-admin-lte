import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorProp from '../utils/colorProp';

/**
 * `Badge` allows for specifying a background color. To use a contextually
 * styled badge use the react-bootstrap component.
 */
const Badge = ({
  backgroundColor,
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'badge': true,
    [`bg-${backgroundColor}`]: true
  }, classNameProp);

  return <span className={className} {...other}>{children}</span>;
};

Badge.propTypes = {
  /**
   * Color of background.
   */
  backgroundColor: colorProp.isRequired,
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

export default Badge;
