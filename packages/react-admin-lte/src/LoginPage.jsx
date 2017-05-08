import PropTypes from 'prop-types';
import React from 'react';

import LoginLogo from './LoginLogo';
import LoginBody from './LoginBody';

const propTypes = {
  children: PropTypes.node,
};

const LoginPage = ({ children }) => (
  <div className="hold-transition login-page" style={{ minHeight: '100vh' }}>
    <div className="login-box" style={{ marginTop: '0', marginBottom: '0', paddingTop: '7vh' }}>
      {children}
    </div>
  </div>
);

LoginPage.propTypes = propTypes;

LoginPage.Logo = LoginLogo;
LoginPage.Body = LoginBody;

export default LoginPage;
