import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  active: React.PropTypes.bool,
};

const SidebarMenuItem = ({ children, active }) => {
  const classes = {
    active
  }

  return (
    <li className={classNames(classes)}>
      {children}
    </li>
  );
};

SidebarMenuItem.propTypes = propTypes;

export default SidebarMenuItem;
