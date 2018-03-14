import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RegistrationLogo = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'registration-logo': true
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

RegistrationLogo.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

export default RegistrationLogo;
