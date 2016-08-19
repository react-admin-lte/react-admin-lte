import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const LoginLogo = ({ children }) => (
  <div className="login-logo">
    {children}
  </div>
);

LoginLogo.propTypes = propTypes;

export default LoginLogo;
