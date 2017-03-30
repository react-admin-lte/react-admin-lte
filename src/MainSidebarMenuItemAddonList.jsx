import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const MainSidebarMenuItemAddonList = ({
  children,
  className,
}) => {
  const classes = {
    'pull-right-container': true,
  };

  return (
    <span className={classNames(className, classes)}>
      {children}
    </span>
  );
};

MainSidebarMenuItemAddonList.propTypes = propTypes;

export default MainSidebarMenuItemAddonList;
