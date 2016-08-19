import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const LoginBody = ({ children }) => (
  <div className="login-box-body">
    {children}
  </div>
);

LoginBody.propTypes = propTypes;

export default LoginBody;
