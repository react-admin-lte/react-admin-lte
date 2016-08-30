import React from 'react';

import SidebarUserPanelImage from './SidebarUserPanelImage';
import SidebarUserPanelInfo from './SidebarUserPanelInfo';

const propTypes = {
  children: React.PropTypes.node,
};

const SidebarUserPanel = ({ children }) => (
  <div className="user-panel">
    {children}
  </div>
);

SidebarUserPanel.Image = SidebarUserPanelImage;
SidebarUserPanel.Info = SidebarUserPanelInfo;

SidebarUserPanel.propTypes = propTypes;

export default SidebarUserPanel;
