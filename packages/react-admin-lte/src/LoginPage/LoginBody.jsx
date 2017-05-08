import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

const LoginBody = ({ children, className }) => {
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
