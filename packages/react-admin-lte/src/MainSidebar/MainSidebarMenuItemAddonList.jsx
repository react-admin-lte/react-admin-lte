import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
