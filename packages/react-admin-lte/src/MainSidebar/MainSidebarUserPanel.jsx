import PropTypes from 'prop-types';
import React from 'react';
import MainSidebarUserPanelImage from './MainSidebarUserPanelImage';
import MainSidebarUserPanelInfo from './MainSidebarUserPanelInfo';

const propTypes = {
  children: PropTypes.node,
};

const MainSidebarUserPanel = ({
  children,
}) => (
  <div className="user-panel">
    {children}
  </div>
);

MainSidebarUserPanel.propTypes = propTypes;

MainSidebarUserPanel.Image = MainSidebarUserPanelImage;
MainSidebarUserPanel.Info = MainSidebarUserPanelInfo;

export default MainSidebarUserPanel;
