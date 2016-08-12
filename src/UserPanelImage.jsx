import React from 'react';

const propTypes = {
  image: React.PropTypes.node,
};

const UserPanelImage = ({ image }) => (
  <div className="pull-left image">
    {image}
  </div>
);

UserPanelImage.propTypes = propTypes;

export default UserPanelImage;
