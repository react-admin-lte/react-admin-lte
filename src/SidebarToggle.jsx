import React from 'react';

const propTypes = {
  srText: React.PropTypes.string,
};

const SidebarToggle = ({ srText }) => (
  <a href="#" className="sidebar-toggle">
    <span className="sr-only">{srText}</span>
    <span className="icon-bar" />
    <span className="icon-bar" />
    <span className="icon-bar" />
  </a>
);

SidebarToggle.propTypes = propTypes;

export default SidebarToggle;
