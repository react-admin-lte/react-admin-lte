import React from 'react';

import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderSidebarToggle from './MainHeaderSidebarToggle';

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
MainHeader.SidebarToggle = MainHeaderSidebarToggle;

export default MainHeader;
