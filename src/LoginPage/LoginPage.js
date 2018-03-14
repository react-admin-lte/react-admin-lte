import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LoginPage = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'login-page': true
  }, classNameProp);

  return (
    <div className={className} style={{ minHeight: '100vh' }} {...other}>
      {children}
    </div>
  );
};

LoginPage.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default LoginPage;
