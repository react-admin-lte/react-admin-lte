import * as PropTypes from 'prop-types';
import * as React from 'react';

import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderSidebarToggle from './MainHeaderSidebarToggle';
import MainHeaderNavbar from './MainHeaderNavbar';

export interface MainHeaderComponent extends React.StatelessComponent<{}> {
  Logo: typeof MainHeaderLogo;
  SidebarToggle: typeof MainHeaderSidebarToggle;
  Navbar: typeof MainHeaderNavbar;
};

const propTypes = {
  children: PropTypes.node,
};

const MainHeader = (({ children }) => (
  <header className="main-header">
    {children}
  </header>
)) as MainHeaderComponent;

MainHeader.propTypes = propTypes;

MainHeader.Logo = MainHeaderLogo;
MainHeader.SidebarToggle = MainHeaderSidebarToggle;
MainHeader.Navbar = MainHeaderNavbar;

export default MainHeader;
