import React from 'react';

import UserPanelImage from './UserPanelImage';
import UserPanelInfo from './UserPanelInfo';

const propTypes = {
  children: React.PropTypes.node,
};

const SidebarUserPanel = ({ children }) => (
  <div className="user-panel">
    {children}
  </div>
);

SidebarUserPanel.Image = UserPanelImage;
SidebarUserPanel.Info = UserPanelInfo;

SidebarUserPanel.propTypes = propTypes;

export default SidebarUserPanel;
