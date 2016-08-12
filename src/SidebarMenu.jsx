import React from 'react';

import SidebarMenuHeader from './SidebarMenuHeader';
import SidebarMenuItem from './SidebarMenuItem';

const propTypes = {
  children: React.PropTypes.node,
};

const SidebarMenu = ({ children }) => (
  <ul className="sidebar-menu">
    {children}
  </ul>
);

SidebarMenu.propTypes = propTypes;

SidebarMenu.Header = SidebarMenuHeader;
SidebarMenu.Item = SidebarMenuItem;

export default SidebarMenu;
