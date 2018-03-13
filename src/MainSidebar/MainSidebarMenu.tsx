import * as PropTypes from 'prop-types';
import * as React from 'react';

import MainSidebarMenuHeader from './MainSidebarMenuHeader';
import MainSidebarMenuItem from './MainSidebarMenuItem';

export interface MainSidebarMenuComponent extends React.StatelessComponent<{}> {
  Header: typeof MainSidebarMenuHeader;
  Item: typeof MainSidebarMenuItem;
};

const propTypes = {
  children: PropTypes.node,
};

const MainSidebarMenu = (({ children }) => (
  <ul className="sidebar-menu">
    {children}
  </ul>
)) as MainSidebarMenuComponent;

MainSidebarMenu.propTypes = propTypes;

MainSidebarMenu.Header = MainSidebarMenuHeader;
MainSidebarMenu.Item = MainSidebarMenuItem;

export default MainSidebarMenu;
