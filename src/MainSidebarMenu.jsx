import React from 'react';

import MainSidebarMenuHeader from './MainSidebarMenuHeader';
import MainSidebarMenuItem from './MainSidebarMenuItem';
import MainSidebarMenuTree from './MainSidebarMenuTree';

const propTypes = {
  children: React.PropTypes.node,
};

const MainSidebarMenu = ({ children }) => (
  <ul className="sidebar-menu">
    {children}
  </ul>
);

MainSidebarMenu.propTypes = propTypes;

MainSidebarMenu.Header = MainSidebarMenuHeader;
MainSidebarMenu.Item = MainSidebarMenuItem;
MainSidebarMenu.Tree = MainSidebarMenuTree;

export default MainSidebarMenu;
