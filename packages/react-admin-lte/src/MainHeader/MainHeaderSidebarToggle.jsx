import PropTypes from 'prop-types';
import React from 'react';

const contextTypes = {
  $adminlte_layout: PropTypes.shape({
    toggleMainSidebar: PropTypes.func,
  }),
};

const SidebarToggle = (undefined, context) => (
  <a href="#" onClick={context.$adminlte_layout.toggleMainSidebar} className="sidebar-toggle">
    <span className="sr-only">Toggle navigation</span>
  </a>
);

SidebarToggle.contextTypes = contextTypes;

export default SidebarToggle;
