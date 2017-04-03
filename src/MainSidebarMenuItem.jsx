import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import MainSidebarMenuItemAddonList from './MainSidebarMenuItemAddonList';
import MainSidebarMenuItemAddon from './MainSidebarMenuItemAddon';

const propTypes = {
  active: React.PropTypes.bool,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  href: React.PropTypes.string,
  iconName: React.PropTypes.string,
  onClick: React.PropTypes.func,
  role: React.PropTypes.role,
  title: React.PropTypes.string,
};

const MainSidebarMenuItem = ({
  active,
  children,
  className,
  href,
  iconName,
  onClick,
  role,
  title,
}) => {
  const classes = {
    active,
  };

  const icon = iconName
    ? <FontAwesome name={iconName} tag="i" />
    : null;

  let addons = [];
  let other = [];

  React.Children.forEach(children, child => {
    if (child.type === MainSidebarMenuItemAddonList) {
      addons.push(child);
    } else {
      other.push(child);
    }
  });

  return (
    <li className={classNames(className, classes)}>
      <a href={href} onClick={onClick} role={role}>
        {icon}
        <span>{title}</span>
        {addons}
      </a>
      {other}
    </li>
  );
};

MainSidebarMenuItem.propTypes = propTypes;

MainSidebarMenuItem.AddonList = MainSidebarMenuItemAddonList;
MainSidebarMenuItem.Addon = MainSidebarMenuItemAddon;

export default MainSidebarMenuItem;
