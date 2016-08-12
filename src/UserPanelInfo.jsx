import React from 'react';

const propTypes = {
  children: React.PropTypes.node,
};

const UserPanelInfo = ({ children }) => (
  <div className="pull-left info">
    {children}
  </div>
);

UserPanelInfo.propTypes = propTypes;

export default UserPanelInfo;
