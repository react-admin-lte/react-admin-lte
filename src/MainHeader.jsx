import React from 'react';

import MainHeaderLogo from './MainHeaderLogo';

const propTypes = {
  children: React.PropTypes.node,
};

const MainHeader = ({ children }) => (
  <header className="main-header">
    {children}
  </header>
);

MainHeader.propTypes = propTypes;

MainHeader.Logo = MainHeaderLogo;

export default MainHeader;
