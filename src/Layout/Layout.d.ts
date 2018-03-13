import * as React from 'react';

export interface LayoutProps {
  boxed?: boolean;
  fixed?: boolean;
  miniSidebar?: boolean;
  sidebarCollapsed?: boolean;
  topNav?: boolean;
}

declare const Layout: React.ComponentType<LayoutProps>;

export default Layout;
