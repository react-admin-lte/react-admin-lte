import React from 'react';

const propTypes = {
  image: React.PropTypes.node,
};

const SidebarUserPanelImage = ({ image }) => (
  <div className="pull-left image">
    {image}
  </div>
);

SidebarUserPanelImage.propTypes = propTypes;

export default SidebarUserPanelImage;
