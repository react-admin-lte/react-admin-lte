import PropTypes from 'prop-types';
import React from 'react';

import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderSidebarToggle from './MainHeaderSidebarToggle';
import MainHeaderNavbar from './MainHeaderNavbar';

const propTypes = {
  children: PropTypes.node,
};

const MainHeader = ({ children }) => (
  <header className="main-header">
    {children}
  </header>
);

MainHeader.propTypes = propTypes;

MainHeader.Logo = MainHeaderLogo;
MainHeader.SidebarToggle = MainHeaderSidebarToggle;
MainHeader.Navbar = MainHeaderNavbar;

export default MainHeader;
