import * as PropTypes from 'prop-types';
import * as React from 'react';

import LoginLogo from './LoginLogo';
import LoginBody from './LoginBody';

export interface LoginPageComponent extends React.StatelessComponent<{}> {
  Logo: typeof LoginLogo;
  Body: typeof LoginBody;
};

const propTypes = {
  children: PropTypes.node,
};

const LoginPage = (({ children }) => (
  <div className="hold-transition login-page" style={{ minHeight: '100vh' }}>
    <div className="login-box" style={{ marginTop: '0', marginBottom: '0', paddingTop: '7vh' }}>
      {children}
    </div>
  </div>
)) as LoginPageComponent;

LoginPage.propTypes = propTypes;

LoginPage.Logo = LoginLogo;
LoginPage.Body = LoginBody;

export default LoginPage;
