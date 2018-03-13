import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

const LoginLogo: React.StatelessComponent<Props> =
  ({ children, className }) => {
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
