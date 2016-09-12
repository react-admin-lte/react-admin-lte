import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.node,
};

const LoginBody = ({ children }) => {
  const classes = {
    "login-box-body": true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

LoginBody.propTypes = propTypes;

export default LoginBody;
