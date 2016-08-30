import React from 'react';

const propTypes = {
  image: React.PropTypes.node,
  info: React.PropTypes.node,
};

const SidebarUserPanel = ({
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

SidebarUserPanel.propTypes = propTypes;

export default SidebarUserPanel;
