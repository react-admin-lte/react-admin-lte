import React from 'react';

import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderSidebarToggle from './MainHeaderSidebarToggle';

const propTypes = {
  children: React.PropTypes.node,
  logo: React.PropTypes.node,
};

const MainHeader = ({ logo, children }) => (
  <header className="main-header">
    {logo}
    <nav className="navbar navbar-static-top">
      {children}
    </nav>
  </header>
);

MainHeader.propTypes = propTypes;

MainHeader.Logo = MainHeaderLogo;
MainHeader.SidebarToggle = MainHeaderSidebarToggle;

export default MainHeader;
