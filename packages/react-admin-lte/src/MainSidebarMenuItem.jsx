import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import MainSidebarMenuItemAddonList from './MainSidebarMenuItemAddonList';
import MainSidebarMenuItemAddon from './MainSidebarMenuItemAddon';

const propTypes = {
  active: React.PropTypes.bool,
  children: React.PropTypes.node,
  href: React.PropTypes.string,
  iconName: React.PropTypes.string,
  onClick: React.PropTypes.func,
  title: React.PropTypes.string,
};

const MainSidebarMenuItem = ({
  active,
  children,
  href,
  iconName,
  onClick,
  title,
}) => {
  const classes = {
    active,
  };

  const icon = iconName
    ? <FontAwesome name={iconName} tag="i" />
    : null;

  return (
    <li className={classNames(classes)}>
      <a href={href} onClick={onClick}>
        {icon}
        <span>{title}</span>
        {children}
      </a>
    </li>
  );
};

MainSidebarMenuItem.propTypes = propTypes;

MainSidebarMenuItem.AddonList = MainSidebarMenuItemAddonList;
MainSidebarMenuItem.Addon = MainSidebarMenuItemAddon;

export default MainSidebarMenuItem;
