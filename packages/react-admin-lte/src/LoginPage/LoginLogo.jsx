import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

const LoginLogo = ({ children, className }) => {
  const classes = {
    "login-logo": true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

LoginLogo.propTypes = propTypes;

export default LoginLogo;
