import React from 'react';

import SidebarToggle from './SidebarToggle';
import SidebarUserPanel from './SidebarUserPanel';
import SidebarMenu from './SidebarMenu';

const propTypes = {
  children: React.PropTypes.node,
};

const Sidebar = ({ children }) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      {children}
    </section>
  </aside>
);

Sidebar.Toggle = SidebarToggle;
Sidebar.UserPanel = SidebarUserPanel;
Sidebar.Menu = SidebarMenu;

Sidebar.propTypes = propTypes;

export default Sidebar;
