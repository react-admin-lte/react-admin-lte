import * as PropTypes from 'prop-types';
import * as React from 'react';
import MainSidebarUserPanelImage from './MainSidebarUserPanelImage';
import MainSidebarUserPanelInfo from './MainSidebarUserPanelInfo';

export interface MainSidebarUserPanelComponent
  extends React.StatelessComponent<{}> {
    Image: typeof MainSidebarUserPanelImage;
    Info: typeof MainSidebarUserPanelInfo;
  };

const propTypes = {
  children: PropTypes.node,
};

const MainSidebarUserPanel = (({
  children,
}) => (
  <div className="user-panel">
    {children}
  </div>
)) as MainSidebarUserPanelComponent;

MainSidebarUserPanel.propTypes = propTypes;

MainSidebarUserPanel.Image = MainSidebarUserPanelImage;
MainSidebarUserPanel.Info = MainSidebarUserPanelInfo;

export default MainSidebarUserPanel;
