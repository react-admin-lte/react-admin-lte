import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LoginLogo = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'login-logo': true
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

LoginLogo.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

export default LoginLogo;
