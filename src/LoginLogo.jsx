import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.node,
};

const LoginLogo = ({ children }) => {
  const classes = {
    "login-logo": true,
  };

  return (
    <div className={classNames(className, classes}>
      {children}
    </div>
  );
);

LoginLogo.propTypes = propTypes;

export default LoginLogo;
