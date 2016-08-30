import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const SidebarUserPanelInfo = ({ children }) => (
  <div className="pull-left info">
    {children}
  </div>
);

SidebarUserPanelInfo.propTypes = propTypes;

export default SidebarUserPanelInfo;
