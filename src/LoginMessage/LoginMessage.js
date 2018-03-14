import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LoginMessage = ({
  children,
  className: classNameProp,
  component: Component,
  ...other
}) => {
  const className = classNames({
    'login-box-msg': true
  }, classNameProp);

  return (
    <Component className={className} {...other}>
      {children}
    </Component>
  )
};

LoginMessage.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

LoginMessage.defaultProps = {
  component: 'p'
};

export default LoginMessage;
