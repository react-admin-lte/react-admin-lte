import React from 'react';

const propTypes = {
  title: React.PropTypes.string,
};

const SidebarMenuHeader = ({ title }) => (
  <li className="header">
    {title}
  </li>
);

SidebarMenuHeader.propTypes = propTypes;

export default SidebarMenuHeader;
