import React from 'react';

const contextTypes = {
  $adminlte_layout: React.PropTypes.shape({
    toggleMainSidebar: React.PropTypes.func,
  }),
};

const SidebarToggle = (undefined, context) => (
  <a href="#" onClick={context.$adminlte_layout.toggleMainSidebar} className="sidebar-toggle">
    <span className="sr-only">Toggle navigation</span>
  </a>
);

SidebarToggle.contextTypes = contextTypes;

export default SidebarToggle;
