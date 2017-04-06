import React from 'react';
import classNames from 'classnames';
import Label from './Label';

const propTypes = {
  background: Label.propTypes.background,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const MainSidebarMenuItemAddon = ({
  background,
  children,
  className,
}) => {
  const classes = {
    'pull-right': true,
  };

  return (
    <Label
      background={background}
      className={classNames(className, classes)}
    >{children}</Label>
  );
};

MainSidebarMenuItemAddon.propTypes = propTypes;

export default MainSidebarMenuItemAddon;
