import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LoginBoxBody = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'login-box-body': true
  }, classNameProp);

  return (
    <div
      className={className}
      {...other}
    >
      {children}
    </div>
  );
};

LoginBoxBody.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default LoginBoxBody;
