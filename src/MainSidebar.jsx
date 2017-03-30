import React from 'react';

import MainSidebarUserPanel from './MainSidebarUserPanel';
import MainSidebarMenu from './MainSidebarMenu';

const propTypes = {
  children: React.PropTypes.node,
};

const MainSidebar = ({ children }) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      {children}
    </section>
  </aside>
);

MainSidebar.UserPanel = MainSidebarUserPanel;
MainSidebar.Menu = MainSidebarMenu;

MainSidebar.propTypes = propTypes;

export default MainSidebar;
