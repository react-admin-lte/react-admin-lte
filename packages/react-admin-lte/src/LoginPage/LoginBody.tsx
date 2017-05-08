import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const LoginBody: React.StatelessComponent<Props> =
  ({ children, className }) => {
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
