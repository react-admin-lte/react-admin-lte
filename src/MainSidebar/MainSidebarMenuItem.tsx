import * as PropTypes from 'prop-types';
import * as React from 'react';
import FontAwesome = require('react-fontawesome');
import * as classNames from 'classnames';
import MainSidebarMenuItemAddonList from './MainSidebarMenuItemAddonList';
import MainSidebarMenuItemAddon from './MainSidebarMenuItemAddon';

export interface Props {
  active?: boolean;
  href?: string;
  iconName?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  title?: string;
};

export interface MainSidebarMenuItemComponent
  extends React.StatelessComponent<Props> {
    AddonList: typeof MainSidebarMenuItemAddonList;
    Addon: typeof MainSidebarMenuItemAddon;
  };

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  iconName: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

const MainSidebarMenuItem = (({
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
}) as MainSidebarMenuItemComponent;

MainSidebarMenuItem.propTypes = propTypes;

MainSidebarMenuItem.AddonList = MainSidebarMenuItemAddonList;
MainSidebarMenuItem.Addon = MainSidebarMenuItemAddon;

export default MainSidebarMenuItem;
