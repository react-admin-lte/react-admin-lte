import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Skin = ({
  children,
  className: classNameProp,
  color,
  ...other
}) => {
  const className = classNames({
    [`skin-${color}`]: true
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

Skin.propTypes = {
  /**
   * The content of the skin.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Color of the skin to display.
   */
  color: PropTypes.oneOf([
    'blue', 'black', 'purple', 'green', 'red', 'yellow', 'blue-light', 'black-light',
    'purple-light', 'green-light', 'red-light', 'yellow-light'
  ]).isRequired
};

export default Skin;
