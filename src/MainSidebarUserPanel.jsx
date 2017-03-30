import React from 'react';

const propTypes = {
  image: React.PropTypes.node,
  info: React.PropTypes.node,
};

const MainSidebarUserPanel = ({
  image,
  info,
}) => (
  <div className="user-panel">
    <div className="pull-left image">
      {image}
    </div>
    <div className="pull-left info">
      {info}
    </div>
  </div>
);

MainSidebarUserPanel.propTypes = propTypes;

export default MainSidebarUserPanel;
